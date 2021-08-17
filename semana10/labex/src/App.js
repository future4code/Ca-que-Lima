import { createGlobalStyle } from 'styled-components'
import Router from './routes/Router'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
  }
`

function App() {
  return (
    <>
    <GlobalStyle />
    <Router />
    </>
  )
}

export default App