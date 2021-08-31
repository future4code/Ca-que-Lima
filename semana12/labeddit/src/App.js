import Router from "./routes/Router"
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: 'Nunito', sans-serif;;
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