import React from 'react'
import styled from 'styled-components'

const ContainerGeral = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    > button {
        margin-top: 15px;
    }
`

const ContainerDados = styled.div`
    width: 300px;
    height: 90px;
    border: 1px solid black;
    padding: 10px;
`


class Detalhes extends React.Component {

    state = {
        editando: false,
        inputNome: "",
        inputEmail: ""
    }

    render() {

        return (
            <ContainerGeral>
                <h4>Detalhes</h4>
                <ContainerDados>
                    <p>Nome: {this.props.nome}</p>
                    <p>Email: {this.props.email}</p>
                </ContainerDados>
                <button onClick={() => this.props.apagaUsuario(this.props.id)}>Apagar Usuário</button>
                <button onClick={this.props.voltar}>Voltar</button>
            </ContainerGeral>
        )
    }
}

export default Detalhes