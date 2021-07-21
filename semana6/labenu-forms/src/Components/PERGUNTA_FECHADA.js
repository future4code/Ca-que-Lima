import React from 'react'
import styled from 'styled-components'

const Formulario = styled.form`
    display: flex;
    flex-direction: column;
`

const DropDown = styled.select`
    height: 25px;
`

class PERGUNTA_FECHADA extends React.Component {
    state = {
        valor: this.props.opcoes[0]
    }

    atualizaValor = (event) => {
        this.setState({valor: event.target.value})
    }


    render() {
        return (
            <Formulario>
                <label htmlFor={this.props.for}>{this.props.pergunta}</label>
                <DropDown id={this.props.for} onChange={this.atualizaValor}>
                    {this.props.opcoes.map((item, index) => <option key={index} value={item} onChange={this.atualizaValor}>{item}</option>)}
                </DropDown>
            </Formulario>
        )
    }
}

export default PERGUNTA_FECHADA