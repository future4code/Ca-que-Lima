import React from 'react'
import styled from 'styled-components'

const ContainerGeral = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    button {
        padding: 3px;
    }
`

const ContainerLi = styled.li`
    display: flex;
    justify-content: space-between;
    width: 300px;
    margin: 10px;
`

class Lista extends React.Component {
    render() {
        const listaUsuarios = this.props.usuarios.map(usuario => {
            return <ContainerLi key={usuario.id}>{usuario.name} <button onClick={() => this.props.apagaUsuario(usuario.id)}>Apagar</button></ContainerLi>
          })

        const listaOrdenada = listaUsuarios.sort((a, b) => {
            return a.props.children[0].localeCompare(b.props.children[0])
        })
        return (
            <ContainerGeral>
                <h3>Usuários</h3>
                {listaOrdenada}
                <br />
                <button onClick={this.props.alteraPagina}>Voltar</button>
            </ContainerGeral>
        )
    }
}

export default Lista