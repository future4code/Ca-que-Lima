import axios from 'axios'
import { useEffect, useState } from "react";

import { Container, ContainerProfile, Header, Body, Footer } from "./styles";

const baseUrl = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/caiquelima/"

function Swipe(props) {

    const [profile, setProfile] = useState({})

    useEffect(() => {
        getProfile()
    }, [])

    const getProfile = () => {
        axios.get(`${baseUrl}person`).then(res => {
            setProfile(res.data.profile)
        }).catch(err => {
            console.log(err.response)
        })
    }

    const chooseProfile = () => {
        const body = {
            id: profile.id,
            choice: true
        }
        axios.post(`${baseUrl}choose-person`, body).then(res => {
            if (res.data.isMatch) {
                alert('Match!!!!111!!!!!!1!!1')
            }
            setProfile({})
            getProfile()
        }).catch(err => {
            console.log(err.response)
        })
    }

    const dismissProfile = () => {
        const body = {
            id: profile.id,
            choice: false
        }
        axios.post(`${baseUrl}choose-person`, body).then(res => {
            setProfile({})
            getProfile()
        }).catch(err => {
            console.log(err.response)
        })
    }


    return (
        <Container>
            <Header>
                <p>ASTROMACH</p>
                <button onClick={() => props.updateScreen('matches')}>Matches</button>
            </Header>

            <Body>
                {Object.keys(profile).length ? (
                    <ContainerProfile image={profile.photo}>
                        <img src={profile.photo} alt="Imagem de Capa"/>
                        <div>
                            <h4>{profile.name},</h4> <span>{profile.age}</span>
                            <p>{profile.bio}</p>
                        </div>
                    </ContainerProfile>
                ) : (
                    <h4>Carregando...</h4>
                )}
            </Body>

            <Footer>
                <button onClick={dismissProfile}>NOPE</button>
                <button onClick={chooseProfile}>YEP</button>
            </Footer>
        </Container>
    )
}

export default Swipe