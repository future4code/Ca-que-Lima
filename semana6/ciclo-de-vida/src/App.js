import React from 'react'
import styled from 'styled-components'
import './styles.css'// eslint-disable-next-line
import iconeLixo from './img/iconeLixo.svg'
import iconeEdit from './img/iconeEdit.svg'

const TarefaList = styled.ul`
  padding: 0;
  width: 300px;
  margin-bottom: 100px;
  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 10px, auto;
  }
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({ completa }) => (completa ? 'line-through' : 'none')}; 
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`

const ContainerIcones = styled.div`
  display: flex;
  align-items: center;

  > img {
    margin-left: 10px;
  }
`

class App extends React.Component {
  state = {
    tarefas: [],
    inputValue: '',
    filtro: ''
  }

  componentDidMount() {
    localStorage.getItem('tarefas') && this.setState({
      tarefas: JSON.parse(localStorage.getItem('tarefas'))
    })
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.tarefas !== this.state.tarefas) {
      localStorage.setItem('tarefas', JSON.stringify(this.state.tarefas))
    }
  };

  onChangeInput = (event) => {
    this.setState({ inputValue: event.target.value })
  }

  criaTarefa = () => {
    const novaTarefa = {
      id: Date.now(),
      texto: this.state.inputValue,
      completa: false
    }

    const novaListaTarefas = [...this.state.tarefas, novaTarefa]
    this.setState({ tarefas: novaListaTarefas, inputValue: '' })
  }

  selectTarefa = (id) => {
    const listaTarefaAlterada = this.state.tarefas.map(tarefa => {
      if (id === tarefa.id) {
        const tarefaAlterada = { ...tarefa, completa: !tarefa.completa }
        return tarefaAlterada
      } else {
        return tarefa
      }
    })
    this.setState({ tarefas: listaTarefaAlterada })
  }

  editaTarefa = (id) => {
    const novoNome = prompt('Digite o novo nome da tarefa')
    const listaTarefaAlterada = this.state.tarefas.map(tarefa => {
      if (id === tarefa.id) {
        const tarefaAlterada = { ...tarefa, texto: novoNome }
        return tarefaAlterada
      } else {
        return tarefa
      }
    })
    this.setState({ tarefas: listaTarefaAlterada })
  }

  apagaTarefa = (id) => {
    if (window.confirm(`Quer apagar a tarefa?`)) {
      const novaListaTarefas = this.state.tarefas.filter(tarefa => {
        return id !== tarefa.id
      })
      this.setState({ tarefas: novaListaTarefas })
    }
  }

  onChangeFilter = (event) => {
    this.setState({ filtro: event.target.value })
  }

  apagaTudo = () => {
    if (window.confirm('Tem certeza que quer apagar tudo?')) {
      localStorage.clear()
      this.setState({
        tarefas: [],
        inputValue: ''
      })
    }
    alert('Tarefas apagadas')
  }

  render() {
    const listaFiltrada = this.state.tarefas.filter(tarefa => {
      switch (this.state.filtro) {
        case 'pendentes':
          return !tarefa.completa
        case 'completas':
          return tarefa.completa
        default:
          return true
      }
    })

    return (
      <div className="App">

        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput} />
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>

        <br />

        {/* <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filtro} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer> */}

        <TarefaList>
          <h3>Tarefas pendentes</h3>
          {listaFiltrada.map(tarefa => {
            return (!tarefa.completa &&
              <div>
                <Tarefa
                  completa={tarefa.completa}
                  onClick={() => this.selectTarefa(tarefa.id)}
                >
                  {tarefa.texto}
                </Tarefa>
                <ContainerIcones>
                  <img src={iconeEdit} alt="Ícone para editar" onClick={() => this.editaTarefa(tarefa.id)} />
                  <img src={iconeLixo} alt="Ícone para apagar" onClick={() => this.apagaTarefa(tarefa.id)} />
                </ContainerIcones>
              </div>
            )
          })}
        </TarefaList>

        <TarefaList>
          <h3>Tarefas completas</h3>
          {listaFiltrada.map(tarefa => {
            return (tarefa.completa &&
              <div>
                <Tarefa
                  completa={tarefa.completa}
                  onClick={() => this.selectTarefa(tarefa.id)}
                >
                  {tarefa.texto}
                </Tarefa>
                <ContainerIcones>
                  <img src={iconeEdit} alt="Ícone para editar" onClick={() => this.editaTarefa(tarefa.id)} />
                  <img src={iconeLixo} alt="Ícone para apagar" onClick={() => this.apagaTarefa(tarefa.id)} />
                </ContainerIcones>
              </div>
            )
          })}
        </TarefaList>

        <button onClick={this.apagaTudo}>Apagar tudo</button>
      </div>
    )
  }
}

export default App