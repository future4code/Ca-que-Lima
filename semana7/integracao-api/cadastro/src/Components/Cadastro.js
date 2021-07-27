import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

const Container = styled.div`
    width: 400px;
    height: 320px;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    align-items: center;

    > h3 {
        margin-bottom: 5px;
    }

    > button {
        margin: 15px;
        padding: 3px;
    }
`

class Cadastro extends React.Component {
    render() {
        return (
            <Container>
                <h3>Cadastro</h3>
                <div>
                    <p>Nome:</p>
                    <input value={this.props.valorNome} onChange={this.props.atualizaNome} />
                </div>
                <div>
                    <p>Email:</p>
                    <input value={this.props.valorEmail} onChange={this.props.atualizaEmail} />
                </div>
                <button onClick={this.props.criaUsuario}>Salvar</button>
                <button onClick={this.props.alteraPagina}>Ir para lista</button>
            </Container>
        )
    }
}

export default Cadastro