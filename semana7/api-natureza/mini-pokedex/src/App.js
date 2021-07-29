import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import Card from './Card'

const Container = styled.div`
  display: grid;
  grid-template-rows: 80px 1fr;
  min-height: 100vh;
`

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  background-color: #EE4949;
`

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  background-color: #ff7c7c;

  > select {
    border: none;
    padding: 10px;
    border-radius: 8px;
  }
`

class App extends React.Component {

  state = {
    allPokemon: [],
    viewCard: false,
    pokemon: {}
  }

  componentDidMount() {
    this.getList()
  }

  getList = () => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=898')
      .then(res => {
        this.setState({ allPokemon: res.data.results })
      }).catch(err => {
        console.log(err.response)
      })
  }


  updatesPokemon = (e) => {
    axios.get(`${e.target.value}`)
      .then(res => {
        this.setState({ pokemon: res.data, viewCard: true })
      }).catch(err => {
        console.log(err.response)
      })
  }

  render() {
    const pokeList = this.state.allPokemon.map(poke => {
      return <option key={poke.name} value={poke.url}>{poke.name.charAt(0).toUpperCase() + poke.name.slice(1)}</option>
    })

    return (
      <Container>
        <Header>
          <h1>PokéDex</h1>
        </Header>
        <Main>
          <h2>Escolha um Pokémon</h2>
          <select onChange={this.updatesPokemon}>
            <option>Selecione Aqui</option>
            {pokeList}
          </select>
          {this.state.viewCard && <Card pokemon={this.state.pokemon} />}
        </Main>
      </Container>
    );
  }

}

export default App;
