import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import Detalhes from './Detalhes'

const ContainerGeral = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    button {
        padding: 3px;
    }
    button:hover {
        cursor: pointer;
    }
`

const ContainerLi = styled.li`
    display: flex;
    justify-content: space-between;
    width: 300px;
    margin: 10px;
    border: 1px solid black;
    padding: 10px;
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
        usuarioDetalhado: {}
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

    render() {
        const listaUsuarios = this.state.usuarios.map(usuario => {
            return (
                <ContainerLi key={usuario.id}>
                    <div onDoubleClick={() => this.selecionaUsuario(usuario.id)}>
                        {usuario.name}
                    </div>
                    <div>
                        <button onClick={() => this.apagaUsuario(usuario.id)}>Apagar</button>
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
                    <ContainerGeral>
                        <h3>Usuários</h3>
                        {listaOrdenada}
                        <br />
                        <button onClick={this.props.alteraPagina}>Voltar</button>
                    </ContainerGeral>
                }
            </ContainerGeral>
        )
    }
}

export default Lista