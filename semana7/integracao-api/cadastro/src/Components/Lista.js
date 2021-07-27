import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

class Lista extends React.Component {
    render() {
        const listaUsuarios = this.props.usuarios.map(usuario => {
            return <li key={usuario.id}>{usuario.name} <button onClick={() => this.props.apagaUsuario(usuario.id)}>Apagar</button></li>
          })

        const listaOrdenada = listaUsuarios.sort((a, b) => {
            return a.props.children[0].localeCompare(b.props.children[0])
        })
        return (
            <div>
                {listaOrdenada}
            </div>
        )
    }
}

export default Lista