import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

const ContainerGeral = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    > button {
        margin-top: 15px;
    }
`

const ContainerDados = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    padding: 0 20px;
    > button {
        margin-bottom: 15px;
        width: 70px;
        align-self: center;
    }
`

const ContainerEdição = styled.div`
    display: flex;
    flex-direction: column;
    > input {
        margin-bottom: 15px;
    }
    > button {
        margin-bottom: 15px;
        width: 70px;
        align-self: center;
    }
    > div {
        display: flex;
        justify-content: space-between;
        margin-bottom: 15px;
    }
`
const ContainerBotoes = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 15px;
`
const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'

const headers = {
    headers: {
        Authorization: "caique-lima-lovelace"
    }
}

class Detalhes extends React.Component {

    state = {
        editando: false,
        inputNome: "",
        inputEmail: ""
    }

    alternaEdicao = () => {
        this.setState({ editando: !this.state.editando })
    }

    atualizaNome = (e) => {
        this.setState({ inputNome: e.target.value })
    }

    atualizaEmail = (e) => {
        this.setState({ inputEmail: e.target.value })
    }

    salvaEdicao = (id) => {

        const body = {
            name: this.state.inputNome,
            email: this.state.inputEmail
        }
        axios.put(`${url}/${id}`, body, headers)
            .then(res => {
                alert('Usuário editado com sucesso')
                this.setState({ editando: false })
                this.setState({ inputNome: "", inputEmail: "" })
                this.props.pegaLista()
                this.props.selecionaUsuario(id)
            })
            .catch(err => {
                console.log(id)
                alert(err.response.data.message)
            })
    }

    render() {
        const input = (
            <ContainerEdição>
                <input placeholder="Novo nome" value={this.state.inputNome} onChange={this.atualizaNome} />
                <input placeholder="Novo email" value={this.state.inputEmail} onChange={this.atualizaEmail} />
                <div>
                    <button onClick={() => this.salvaEdicao(this.props.id)}>Salvar</button>
                    <button onClick={this.alternaEdicao}>Cancelar</button>
                </div>
            </ContainerEdição>
        )
        return (
            <ContainerGeral>
                <h4>Detalhes</h4>
                <ContainerDados>
                    <p>Nome: {this.props.nome}</p>
                    <p>Email: {this.props.email}</p>
                    {this.state.editando ? input : <button onClick={this.alternaEdicao}>Editar</button>}
                </ContainerDados>
                <ContainerBotoes>
                    <button onClick={() => this.props.apagaUsuario(this.props.id)}>Apagar Usuário</button>
                    <button onClick={this.props.voltar}>Voltar</button>
                </ContainerBotoes>
            </ContainerGeral>
        )
    }
}

export default Detalhes