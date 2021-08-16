import { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components'
import Matches from './Components/Matches/Matches'
import Swipe from './Components/Swipe/Swipe';
import axios from 'axios';

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Roboto', sans-serif
  }
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: whitesmoke;
`

const BotaoReset = styled.button`
  margin-top: 50px;
  padding: 10px;

  &:hover {
    cursor: pointer;
  }
`

function App() {

  const [screen, setScreen] = useState('swipe')

  const updateScreen = (screen) => {
    setScreen(screen)
  }

  const renderScreen = () => {
    if (screen === 'swipe') {
      return <Swipe updateScreen={updateScreen} />
    } else {
      return <Matches updateScreen={updateScreen} />
    }
  }

  const clearMatches = () => {
    axios.put('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/caiquelima/clear').then(res => {
      alert('Sucesso')
      window.location.reload()
    }).catch(err => {
      console.log(err.response)
    })
  }

  return (
    <>
      <GlobalStyle />
      <Container>
        {renderScreen()}
        <BotaoReset onClick={clearMatches}>Resetar Matches =D</BotaoReset>
      </Container>
    </>
  )
}

export default App