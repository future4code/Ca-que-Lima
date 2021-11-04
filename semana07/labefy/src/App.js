import React from 'react'
import styled from 'styled-components'
import CreatePlaylist from './Components/CreatePlaylist'
import Playlists from './Components/Playlists'

const GlobalContainer = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding-top: 50px;
  background-color: #121212;
  color: white;
  font-family: 'Noto Sans TC', sans-serif;
  -webkit-font-smoothing: antialiased;

  button {
    cursor: pointer;
    padding: 10px;
    border-radius: 10px;
    border: none;
    transition: 0.3s;
    &:hover {
      box-shadow: 0 0 0 3px #1DB954;
    }
  }

  > h1 {
    display: flex;
    font-size: 3rem;
  }

  > h1 > img {
    margin-left: 10px;
  }

  input {
    height: 30px;
    padding: 5px;
    font-style: italic;
    border: none;
    border-bottom: 2px solid white;
    background: transparent;
    color: white;
  }
`

class App extends React.Component {

  state = {
    viewList: false
  }

  updatePage = () => {
    this.setState({ viewList: !this.state.viewList })
  }

  render() {
    return (
      <GlobalContainer>
        <h1>Labefy</h1>
        {this.state.viewList ? <Playlists updatePage={this.updatePage} /> : <CreatePlaylist updatePage={this.updatePage} />}
      </GlobalContainer>
    )
  }
}

export default App;