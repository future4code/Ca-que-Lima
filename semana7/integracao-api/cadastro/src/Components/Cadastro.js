import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

class Cadastro extends React.Component {
    render() {
        return (
            <>
                <h1>Olá</h1>
                <h4>Cadastro</h4>
                <p>Nome:</p>
                <input value={this.props.inputNome} onChange={this.props.atualizaNome} />
                <p>Email:</p>
                <input value={this.props.inputEmail} onChange={this.props.atualizaEmail} />
                <br />
                <button onClick={this.props.criaUsuario}>Enviar</button>
                <br />
            </>
        )
    }
}

export default Cadastro