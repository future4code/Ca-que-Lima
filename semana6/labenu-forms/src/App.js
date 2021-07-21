import React from 'react';
import ETAPA_1 from './Components/ETAPA_1';
import ETAPA_2 from './Components/ETAPA_2';
import ETAPA_3 from './Components/ETAPA_3';
import Final from './Components/Final';
import styled from 'styled-components';
import './App.css';


const BotaoProxima = styled.button`
  margin-top: 20px;
`

class App extends React.Component {
  state = {
    pessoa: {
      nome: "",
      idade: "",
      email: "",
      escolaridade: "",
      curso: "",
      unidadeEnsino: "",
      justificativa: "",
      cursoComplementar: ""
    },

    etapa: 1
  }

  renderizaEtapa = () => {
    switch (this.state.etapa) {
      case 1:
        return <ETAPA_1 />
      case 2:
        return <ETAPA_2 />
      case 3:
        return <ETAPA_3 />
      case 4:
        return <Final />
      default:
        return "Erro no sistema, alguém me desconfigurou!"
    }
  }
  
  aoClicar = () => {
    this.setState({etapa: this.state.etapa + 1})
  }

  render() {
    return (
      <div className="App">
        {this.renderizaEtapa()}
        {this.state.etapa < 4 ? <BotaoProxima onClick={this.aoClicar}>Próxima etapa</BotaoProxima> : null}
      </div>
      )
  }
    
}

export default App;