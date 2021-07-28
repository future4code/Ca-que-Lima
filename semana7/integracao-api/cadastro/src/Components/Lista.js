import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import Detalhes from './Detalhes'

const ContainerGeral = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 50px;
    padding: 20px;
    background-color: whitesmoke;
    border-radius: 8px;
    box-shadow: 0 0 5px 3px lightgray;

    button {

        padding: 10px;
        background-color: #5CB85C;
        border: none;
        border-radius: 8px;
        color: white;
        transition: 0.3s;
    }

    button:hover {
        cursor: pointer;
        box-shadow: 0 0 5px 3px lightgray;
    }
`

const ContainerUsuarios = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

`

const ContainerLi = styled.li`
    display: flex;
    justify-content: space-between;
    width: 300px;
    margin: 10px;
    padding: 10px;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 0 3px lightgray;

    > div > button {
        background-color: #C72B00;
        border: none;
        border-radius: 4px;
        color: white;
        width: 30px;
        padding: 5px;
    }
`

const ContainerNome = styled.div`
    transition: 0.1s;
    &:hover {
        font-weight: 700;
        font-size: 1.1rem;
        cursor: pointer;
    }
`

const ContainerBusca = styled.div`
    display: flex;
    align-items: center;
    min-width: 300px;
    justify-content: space-between;
    margin-bottom: 50px;
    margin-top: 20px;

    input {
        height: 20px;
        border: none;
        padding: 10px;
        border-radius: 8px;
        box-shadow: 0 0 3px lightgray;
    }
`

const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'

const headers = {
    headers: {
        Authorization: "caique-lima-lovelace"
    }
}

class Lista extends React.Component {

    state = {
        usuarios: [],
        detalhes: false,
        usuarioDetalhado: {},
        nomeFiltro: ""
    }

    componentDidMount() {
        this.pegaLista()
    }


    pegaLista = () => {
        axios.get(url, headers)
            .then((res) => {
                this.setState({ usuarios: res.data })
            })
            .catch((err) => {
                alert(err.response.data)
            })
    }

    apagaUsuario = (id) => {
        if (window.confirm('Tem certeza que deseja apagar?')) {
            axios.delete(`${url}/${id}`, headers)
                .then((res) => {
                    alert('Usuário deletado com sucesso')
                    this.pegaLista()
                    this.setState({ detalhes: false, usuarioDetalhado: {} })
                })
                .catch((err) => {
                    alert(err.response.data.message)
                })
        }
    }

    buscaUsuario = (id) => {
        axios.get(`${url}/${id}`, headers)
            .then(res => {
                this.setState({ usuarioDetalhado: res.data })
            })
            .catch(err => {
                alert(err.response.data.message)
            })
    }

    selecionaUsuario = (id) => {
        this.buscaUsuario(id)
        this.setState({ detalhes: true })
    }

    voltaPagina = () => {
        this.setState({ detalhes: false, usuarioDetalhado: {} })
    }

    filtraUsuario = () => {
        axios.get(`${url}/search?name=${this.state.nomeFiltro}`, headers)
            .then(res => {
                if (this.state.nomeFiltro) {
                    this.setState({ usuarios: res.data })
                } else {
                    this.pegaLista()
                }

            })
            .catch(err => {
                alert(err.response.data.message)
            })
    }

    atualizaFiltro = (e) => {
        this.setState({ nomeFiltro: e.target.value })
    }

    render() {
        const listaUsuarios = this.state.usuarios.map(usuario => {
            return (
                <ContainerLi key={usuario.id}>
                    <ContainerNome onClick={() => this.selecionaUsuario(usuario.id)}>
                        {usuario.name}
                    </ContainerNome>
                    <div>
                        <button onClick={() => this.apagaUsuario(usuario.id)}>X</button>
                    </div>
                </ContainerLi>
            )
        })

        const listaOrdenada = listaUsuarios.sort((a, b) => {
            return a.props.children[0].props.children.localeCompare(b.props.children[0].props.children)
        })

        return (
            <ContainerGeral>
                {this.state.detalhes ?
                    <Detalhes
                        nome={this.state.usuarioDetalhado.name}
                        email={this.state.usuarioDetalhado.email}
                        voltar={this.voltaPagina}
                        apagaUsuario={this.apagaUsuario}
                        id={this.state.usuarioDetalhado.id}
                        pegaLista={this.pegaLista}
                        selecionaUsuario={this.selecionaUsuario}
                    />
                    :
                    <ContainerUsuarios>
                        <h3>Usuários</h3>
                        <ContainerBusca>
                            <input placeholder="Pesquisar nome..." value={this.state.nomeFiltro} onChange={this.atualizaFiltro} />
                            <button onClick={this.filtraUsuario}>Buscar</button>
                        </ContainerBusca>
                        {this.state.usuarios.length ? listaOrdenada : <em>Nenhum usuário cadastrado</em>}
                        <br />
                        <button onClick={this.props.alteraPagina}>Voltar</button>
                    </ContainerUsuarios>
                }
            </ContainerGeral>
        )
    }
}

export default Lista