import { useState } from 'react';
import styled from 'styled-components'
import Matches from './Components/Matches/Matches'
import Swipe from './Components/Swipe/Swipe';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: whitesmoke;
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

  return (
    <Container>
      {renderScreen()}
    </Container>
  );
}

export default App;