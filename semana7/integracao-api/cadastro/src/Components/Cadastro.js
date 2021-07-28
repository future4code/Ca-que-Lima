import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

const Container = styled.div`
    width: 400px;
    height: 320px;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    align-items: center;

    > h3 {
        margin-bottom: 5px;
    }

    > button {
        margin: 15px;
        padding: 3px;
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
                <h3>Cadastro</h3>
                <div>
                    <p>Nome:</p>
                    <input value={this.state.inputNome} onChange={this.atualizaNome} />
                </div>
                <div>
                    <p>Email:</p>
                    <input value={this.state.inputEmail} onChange={this.atualizaEmail} />
                </div>
                <button onClick={this.criaUsuario}>Salvar</button>
                <button onClick={this.props.alteraPagina}>Ir para lista</button>
            </Container>
        )
    }
}

export default Cadastro