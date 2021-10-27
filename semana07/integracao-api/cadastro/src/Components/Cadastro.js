import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    > button {
        margin-top: 50px;
        padding: 10px;
        background-color: #5CB85C;
        border: none;
        border-radius: 8px;
        color: white;
        transition: 0.3s;
    }

    > button:hover {
        cursor: pointer;
        box-shadow: 0 0 5px 5px lightgray;
    }
`

const ContainerCadastro = styled.div`
    width: 400px;
    height: 330px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 150px;
    background-color: whitesmoke;
    border-radius: 8px;
    box-shadow: 0 0 5px 3px lightgray;

    > h3 {
        margin-bottom: 5px;
    }

    > button {
        margin: 25px;
        padding: 10px;
        background-color: #5CB85C;
        border: none;
        border-radius: 8px;
        color: white;
        transition: 0.3s;
    }

    > button:hover {
        cursor: pointer;
        box-shadow: 0 0 5px 2px lightgray;
    }

    input {
        height: 20px;
        border: none;
        padding: 10px;
        border-radius: 8px;
        box-shadow: 0 0 3px lightgray;
    }
`
const headers = {
    headers: {
        Authorization: "caique-lima-lovelace"
    }
}

class Cadastro extends React.Component {

    state = {
        inputNome: "",
        inputEmail: ""
    }

    atualizaNome = (e) => {
        this.setState({ inputNome: e.target.value })
    }

    atualizaEmail = (e) => {
        this.setState({ inputEmail: e.target.value })
    }

    criaUsuario = () => {
        const body = {
            name: this.state.inputNome,
            email: this.state.inputEmail
        }

        axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', body, headers)
            .then((res) => {
                alert('Usuário criado com sucesso')
                this.setState({ inputNome: "", inputEmail: "" })
            })
            .catch((err) => {
                alert(err.response.data.message)
            })
    }

    render() {
        return (
            <Container>

                <ContainerCadastro>
                    <h2>Cadastro</h2>
                    <div>
                        <p>Nome:</p>
                        <input value={this.state.inputNome} onChange={this.atualizaNome} />
                    </div>
                    <div>
                        <p>Email:</p>
                        <input value={this.state.inputEmail} onChange={this.atualizaEmail} />
                    </div>
                    <button onClick={this.criaUsuario}>Salvar</button>
                </ContainerCadastro>
                <button onClick={this.props.alteraPagina}>Ir para lista</button>
            </Container>
        )
    }
}

export default Cadastro