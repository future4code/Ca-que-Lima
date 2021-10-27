import React from 'react';
import styled from 'styled-components'
import Post from './components/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  form {
    display: flex;
    flex-direction: column;
    width: 300px
  }

  form > input {
    margin: 10px 0;
    padding: 5px;
  }
  
  form > button {
    width: 100px;
    align-self: center;
    padding: 5px;
  }

  button:hover {
    cursor: pointer;
  }
`

class App extends React.Component {
  state = {
    posts: [
      {
        nomeUsuario: 'Paulinha',
        fotoUsuario: 'https://picsum.photos/50/50?a=1',
        fotoPost: 'https://picsum.photos/200/150?a=1'
      },
      {
        nomeUsuario: 'Josefina',
        fotoUsuario: 'https://picsum.photos/50/50?a=2',
        fotoPost: 'https://picsum.photos/200/150?a=2'
      },
      {
        nomeUsuario: 'Carmen',
        fotoUsuario: 'https://picsum.photos/50/50?a=3',
        fotoPost: 'https://picsum.photos/200/150?a=3'
      }
    ],

    nomeUsuario: '',
    fotoUsuario: '',
    fotoPost: ''
  }

  adicionaDados = (event) => {
    const novoPost = {
      nomeUsuario: this.state.nomeUsuario,
      fotoUsuario: this.state.fotoUsuario,
      fotoPost: this.state.fotoPost,
    }
    this.setState({ posts: [...this.state.posts, novoPost], nomeUsuario: '', fotoUsuario: '', fotoPost: '' })
    event.preventDefault()
  }

  atualizaNome = (event) => {
    this.setState({ nomeUsuario: event.target.value })
  }

  atualizaFotoUsuario = (event) => {
    this.setState({ fotoUsuario: event.target.value })
  }

  atualizaFotoPost = (event) => {
    this.setState({ fotoPost: event.target.value })
  }

  render() {
    const listaPosts = this.state.posts.map((post, index) => {
      return (
        <Post
          key={index}
          nomeUsuario={post.nomeUsuario}
          fotoUsuario={post.fotoUsuario}
          fotoPost={post.fotoPost}
        />
      )
    });

    return (
      <MainContainer>
        {listaPosts}
        <form>
          <input
            value={this.state.nomeUsuario}
            placeholder={'Nome'}
            onChange={this.atualizaNome}
            />
          <input
            value={this.state.fotoUsuario}
            placeholder={'Foto Usuário'}
            onChange={this.atualizaFotoUsuario}
            />
          <input
            value={this.state.fotoPost}
            placeholder={'Foto Post'}
            onChange={this.atualizaFotoPost}
            />
          <button onClick={ this.adicionaDados }>Enviar</button>
        </form>
      </MainContainer>
    );
  }
}

export default App;
