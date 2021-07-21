import React from 'react'
import styled from 'styled-components'

const ContainerFinal = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

class Final extends React.Component {
    render() {
        return (
            <ContainerFinal>
                <h2> O FORMLÁRIO ACABOU</h2>
                <p>Muito Obrigado por participar! Entraremos em contato!</p>
            </ContainerFinal>
        )
    }
}

export default Final