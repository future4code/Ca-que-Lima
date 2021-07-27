import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import './App.css'
import Lista from './Components/Lista'
import Cadastro from './Components/Cadastro'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const headers = {
  headers: {
    Authorization: "caique-lima-lovelace"
  }
}


class App extends React.Component {
  state = {
    usuarios: [],
    inputNome: "",
    inputEmail: "",
    logado: false
  }

  componentDidMount() {
    this.pegaLista()
  }

  atualizaNome = (e) => {
    this.setState({ inputNome: e.target.value })
  }

  atualizaEmail = (e) => {
    this.setState({ inputEmail: e.target.value })
  }

  pegaLista = () => {
    axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', headers)
      .then((res) => {
        this.setState({ usuarios: res.data })
      })
      .catch((err) => {
        alert(err.response.data)
      })
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
        this.pegaLista()
      })
      .catch((err) => {
        alert(err.response.data.message)
      })
  }

  apagaUsuario = (id) => {
    axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`, headers)
      .then((res) => {
        alert('Usuário deletado com sucesso')
        this.pegaLista()
      })
      .catch((err) => {
        console.log(err.response.data.message)
      })
  }

  render() {

    const listaUsuarios = this.state.usuarios.map(usuario => {
      return <li key={usuario.id}>{usuario.name} <button onClick={() => this.apagaUsuario(usuario.id)}>Apagar</button></li>
    })

    console.log(listaUsuarios)
    return (
      <Container>
        {this.state.logado ?
          <Lista
            usuarios={this.state.usuarios}
            apagaUsuario={this.apagaUsuario}
          />
          : 
          <Cadastro
            valorNome={this.state.inputNome}
            valorEmail={this.state.inputEmail}
            atualizaNome={this.atualizaNome}
            atualizaEmail={this.atualizaEmail}
            criaUsuario={this.criaUsuario}
          />}
      </Container>
    )
  }

}

export default App;