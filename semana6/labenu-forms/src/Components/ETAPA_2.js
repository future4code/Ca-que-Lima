import React from 'react'
import styled from 'styled-components'
import PERGUNTA_ABERTA from './PERGUNTA_ABERTA'

const Formulario = styled.div`
    display: flex;
    flex-direction: column;
`

class ETAPA_2 extends React.Component {
    render() {
        return (
            <div>
                <h2>Etapa 2 - Informações do Ensino Superior</h2>
                <Formulario>
                    <PERGUNTA_ABERTA pergunta="5. Qual o curso?" for="curso" />
                    <PERGUNTA_ABERTA pergunta="6. Qual a unidade de ensino?" for="unidadeEnsino" />
                </Formulario>
            </div>
        )
    }
}

export default ETAPA_2