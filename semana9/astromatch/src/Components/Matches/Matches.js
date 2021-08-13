import { useState, useEffect } from "react";
import styled from "styled-components";
import { Container, Header, Body, ContainerMatch } from './styles'
import axios from "axios";

const baseUrl = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/caiquelima/"

function Matches(props) {

    const [matches, setMatches] = useState([])

    useEffect(() => {
        getMatches()
    }, [])

    const getMatches = () => {
        axios.get(`${baseUrl}matches`).then(res => {
            setMatches(res.data.matches)
        }).catch(err => {
            console.log(err.response)
        })
    }

    const matchList = matches.map(object => {
        return (
            <ContainerMatch key={object.id}>
                <img src={object.photo} alt="Imagem de perfil" />
                <p>{object.name}</p>
            </ContainerMatch>
        )
    })

    console.log(matches)
    return (
        <Container>
            <Header>
                <button onClick={() => props.updateScreen('swipe')}>Matches</button>
                <p>Astromatch</p>
            </Header>
            <Body>
                {matchList}
            </Body>

        </Container>
    )
}

export default Matches