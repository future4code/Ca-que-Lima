import React from 'react'
import styled from 'styled-components'

const ShareContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 10px;
`

export class SecaoCompartilhamento extends React.Component {
    render() {
        return (
            <ShareContainer>
                <button onClick={this.props.aoCompartilhar}>Instagram</button>
                <button onClick={this.props.aoCompartilhar}>Facebook</button>
                <button onClick={this.props.aoCompartilhar}>Twitter</button>
            </ShareContainer>
        )
    }
}