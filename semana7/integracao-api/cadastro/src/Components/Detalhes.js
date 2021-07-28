import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

const ContainerGeral = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 300px;
    
    > button {
        margin-top: 15px;
    }
`

const ContainerDados = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 20px;
    min-width: 300px;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 0 3px lightgray;
    > p {
        font-weight: 700;
        font-size: 1.2rem;
    }
    > p > span {
        font-weight: 400;
        margin-left: 10px;
    }

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
        height: 20px;
        border: none;
        padding: 10px;
        border-radius: 8px;
        box-shadow: 0 0 5px lightgray;
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
    > div > button {
        background-color: #C72B00;
    }
`

const BotaoApagar = styled.button`
    background-color: #C72B00;
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

        const body = { //Evita que salve nome ou email vazio
            name: this.state.inputNome ? this.state.inputNome : this.props.nome,
            email: this.state.inputEmail ? this.state.inputEmail : this.props.email
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
                <h2>Detalhes</h2>
                <ContainerDados>
                    <p>Nome: <span>{this.props.nome}</span></p>
                    <p>Email: <span>{this.props.email}</span></p>
                    {this.state.editando ? input : <button onClick={this.alternaEdicao}>Editar</button>}
                </ContainerDados>
                <ContainerBotoes>
                    <div>
                        <button onClick={() => this.props.apagaUsuario(this.props.id)}>Apagar Usuário</button>
                    </div>
                    <button onClick={this.props.voltar}>Voltar</button>
                </ContainerBotoes>
            </ContainerGeral>
        )
    }
}

export default Detalhes