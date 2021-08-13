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
                <p>Astromatch</p>
                <button onClick={() => props.updateScreen('matches')}>Matches</button>
            </Header>

            <Body>
                {Object.keys(profile).length ? (
                    <ContainerProfile image={profile.image}>
                        <img src={profile.photo} />
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
                <button onClick={dismissProfile}>Não</button>
                <button onClick={chooseProfile}>Sim</button>
            </Footer>
        </Container>
    )
}

export default Swipe