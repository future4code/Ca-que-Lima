import { createGlobalStyle } from 'styled-components'
import Router from './routes/Router'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;

    button {
      padding: 15px;
      border: none;
      border-radius: 20px;
      background-color: lightgrey;
      font-size: 1.05rem;
      
      &:hover {
        cursor: pointer;
        background-color: lightblue;
      }
    }
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