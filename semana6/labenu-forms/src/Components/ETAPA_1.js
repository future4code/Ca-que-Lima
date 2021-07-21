import React from 'react'
import styled from 'styled-components'
import PERGUNTA_ABERTA from './PERGUNTA_ABERTA'
import PERGUNTA_FECHADA from './PERGUNTA_FECHADA'

const Formulario = styled.div`
    display: flex;
    flex-direction: column;
`



class ETAPA_1 extends React.Component {
    render() {
        return (
            <div>
                <h2>Etapa 1 - Dados Gerais</h2>
                <Formulario>
                    <PERGUNTA_ABERTA pergunta="1. Qual o seu nome?" for="nome" />
                    <PERGUNTA_ABERTA pergunta="2. Qual a sua idade?" for="idade" />
                    <PERGUNTA_ABERTA pergunta="3. Qual o seu email?" for="email" />
                    <PERGUNTA_FECHADA pergunta="4. Qual a sua escolaridade?" for="escolaridade" opcoes={[
                        "Ensino médio incompleto",
                        "Ensino médio completo",
                        "Ensino superior incompleto",
                        "Ensino superior completo"
                    ]} />
                </Formulario>
            </div>
        )
    }
}

export default ETAPA_1