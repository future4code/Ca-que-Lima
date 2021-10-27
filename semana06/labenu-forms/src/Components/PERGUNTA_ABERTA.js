import React from 'react'
import styled from 'styled-components'

const Formulario = styled.form`
    display: flex;
    flex-direction: column;
`

const Input = styled.input`
    margin-bottom: 20px;
    height: 20px;
`

class PERGUNTA_ABERTA extends React.Component {
    state = {
        valor: ""
    }
    
    atualizaValor = (event) => {
        this.setState({valor: event.target.value})
    }

    render() {
        return(
            <Formulario>
                <label htmlFor={this.props.for}>{this.props.pergunta}</label>
                <Input type="text" id={this.props.for} onChange={this.atualizaValor}></Input>
            </Formulario>
        )
    }
}

export default PERGUNTA_ABERTA