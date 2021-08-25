import { useState, useEffect } from "react";
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

    return (
        <Container>
            <Header>
                <button onClick={() => props.updateScreen('swipe')}>Voltar</button>
                <p>ASTROMACH</p>
            </Header>
            <Body>
                {matchList}
            </Body>
        </Container>
    )
}

export default Matches