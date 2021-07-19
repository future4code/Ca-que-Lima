import React from 'react'
import styled from 'styled-components'
import PERGUNTA_ABERTA from './PERGUNTA_ABERTA'
import PERGUNTA_FECHADA from './PERGUNTA_FECHADA'

const Formulario = styled.div`
    display: flex;
    flex-direction: column;
`

class ETAPA_3 extends React.Component {
    render() {
        return (
            <div>
                <h2>Etapa 3 - Informações Gerais de Ensino</h2>
                <Formulario>
                    <PERGUNTA_ABERTA pergunta="7. Por que você não terminou um curso superior" for="justificativa" />
                    <PERGUNTA_FECHADA pergunta="Você fez algum curso complementar?" for="cursoComplementar" opcoes={[
                        "Curso Técnico",
                        "Curso de Inglês",
                        "Não fiz curso complementar"
                    ]} />
                </Formulario>
            </div>
        )
    }
}

export default ETAPA_3