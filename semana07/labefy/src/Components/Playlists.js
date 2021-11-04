import axios from 'axios'
import React from 'react'
import styled from 'styled-components'
import swal from 'sweetalert2'
import trashIcon from '../img/trashIcon.svg'
import Details from './Details'

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 650px;
    margin-top: 10px;
    padding: 20px;
    justify-content: space-around;
    background-color: #242528;
    border-radius: 10px;
    box-shadow: 0 0 10px 5px #1DB954;

`

const ContainerButton = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    margin-bottom: 30px;
`

const ContainerItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 250px;
    height: 30px;
    padding: 10px;
    margin: 10px 0;
    background-color: whitesmoke;
    color: black;
    border-radius: 10px;

    > span {
        transition: 0.1s;
        &:hover {
            font-weight: 700;
            font-size: 1.1rem;
            cursor: pointer;
        }
    }

    > img {
        cursor: pointer;
        &:hover {
            animation: shake 0.3s;
        }
        @keyframes shake {
            0% { transform: translate(1px, 1px) rotate(0deg); }
            10% { transform: translate(-1px, -2px) rotate(-1deg); }
            20% { transform: translate(-3px, 0px) rotate(1deg); }
            30% { transform: translate(3px, 2px) rotate(0deg); }
            40% { transform: translate(1px, -1px) rotate(1deg); }
        }
    }
`

const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/'

const headers = {
    headers: {
        Authorization: "caique-lima-lovelace"
    }
}

class Playlists extends React.Component {

    state = {
        playlists: [],
        details: false,
        detailedPlaylist: {
            id: "",
            name: ""
        }
    }

    componentDidMount() {
        this.getPlaylists()
    }

    getPlaylists = () => {
        axios.get(url, headers)
            .then(res => {
                this.setState({ playlists: res.data.result.list })
            }).catch(err => {
                swal.fire('OOOPS', 'Algo deu errado... Tente novamente', 'error')
            })
    }

    deletePlaylist = (id) => {
        swal.fire({
            title: 'Tem certeza?',
            text: "Não será possível reverter isso!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sim, apague!',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`${url}${id}`, headers)
                    .then(res => {
                        swal.fire('Ótimo!', 'Playlist apagada com sucesso!', 'success')
                        this.getPlaylists()
                    }).catch(err => {
                        swal.fire('OOOPS', 'Algo deu errado... Tente novamente', 'error')
                    })
            }
        })
    }

    showDetails = (id, name) => {
        this.setState({ details: true, detailedPlaylist: { id: id, name: name } })
    }

    comeBack = () => {
        this.setState({ details: false })
    }

    render() {
        const allPlaylists = this.state.playlists.map(playlist => {
            return (
                <ContainerItem key={playlist.id}>
                    <span onClick={() => this.showDetails(playlist.id, playlist.name)}>{playlist.name}</span>
                    <img src={trashIcon} alt="" onClick={() => this.deletePlaylist(playlist.id)} />
                </ContainerItem>
            )
        })

        return (
            <>
                {this.state.details ?
                    <Container>
                        <Details
                            detailedPlaylist={this.state.detailedPlaylist}
                            comeBack={this.comeBack}
                        />
                    </Container>
                    :
                    <Container>
                        <ContainerButton>
                            <button onClick={this.props.updatePage}>Criar nova Playlist</button>
                        </ContainerButton>

                        {this.state.playlists.length ? allPlaylists : <h2>Não há Playlists salvas</h2>}
                    </Container>
                }
            </>
        )
    }
}

export default Playlists;