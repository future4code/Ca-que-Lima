import React, { useState } from 'react'
import { Container } from './styles'

export default function Card(props) {

    const [isFlipped, setIsFlipped] = useState(false)

    const flipCard = () => {
        setIsFlipped(true)
        alert(`Carta escolhida: ${props.name}`)
    }


    return (
        <Container onClick={flipCard}>
            {!props.gameIsOn && <img src={props.image} alt={'Imagem da carta'}/>}
            {props.gameIsOn && isFlipped && <img src={props.image} alt={'Imagem da carta'}/>}
            {props.gameIsOn && !isFlipped && <img src={props.cardBack} alt={'Imagem da carta'}/>}
        </Container>
    )
}
