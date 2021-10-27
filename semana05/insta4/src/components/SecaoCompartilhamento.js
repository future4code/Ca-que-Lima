import React from 'react'
import styled from 'styled-components'

const ShareContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;

    > div {
        display: flex;
        margin-top: 10px;
    }

    div > button {
        margin: 0 10px;
    }
`

const InputMensagem = styled.input`
    width: 100%;
`

export class SecaoCompartilhamento extends React.Component {
    state = {
        mensagem: ""
    }

    onChangeMensagem = (event) => {
        this.setState({
            mensagem: event.target.value
        })
    }

    render() {
        return (
            <ShareContainer>
                <InputMensagem
                    placeholder="Mensagem"
                    value={this.state.mensagem}
                    onChange={this.onChangeMensagem}
                />
                
                <div>
                    <button id="Instagram" onClick={(event) => this.props.aoCompartilhar(event, this.state.mensagem)}>Instagram</button>
                    <button id="Facebook" onClick={(event) => this.props.aoCompartilhar(event, this.state.mensagem)}>Facebook</button>
                    <button id="Twitter" onClick={(event) => this.props.aoCompartilhar(event, this.state.mensagem)}>Twitter</button>
                </div>
            </ShareContainer>
        )
    }
}