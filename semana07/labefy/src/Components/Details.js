import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import swal from 'sweetalert2'
import trashIcon from '../img/trashIcon.svg'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`

const ContainerTrack = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-size: 0.9rem;
    width: 90%;
    margin: 13px 0;
    background-color: whitesmoke;
    color: black;
    border-radius: 10px;
    
    > audio {
        height: 40px;
        box-shadow: 0 0 5px;
        border-radius: 50px;
    }

    > div {
        margin: 0 5px;
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

const ContainerAdd = styled.div`
    width: 450px;
    margin-top: 10px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    

    > input {
        height: 30px;
        padding: 5px;
        font-style: italic;
        border: none;
        border-bottom: 1px solid black;
    }

    > div {
        display: flex;
        justify-content: center;
        margin-top: 30px;
    }
`

const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/'

const headers = {
    headers: {
        Authorization: "caique-lima-lovelace"
    }
}

class Details extends React.Component {
    state = {
        detailedPlaylist: [],
        inputName: "",
        inputArtist: "",
        inputUrl: ""
    }

    componentDidMount() {
        this.getTracks()
    }

    getTracks = () => {
        axios.get(`${url}${this.props.detailedPlaylist.id}/tracks`, headers)
            .then(res => {
                this.setState({ detailedPlaylist: res.data.result.tracks })
            }).catch(err => {
                swal.fire('OOOPS', 'Algo deu errado... Tente novamente', 'error')
            })
    }

    addTrack = () => {
        const body = {
            name: this.state.inputName,
            artist: this.state.inputArtist,
            url: this.state.inputUrl
        }

        axios.post(`${url}${this.props.detailedPlaylist.id}/tracks`, body, headers)
            .then(res => {
                swal.fire('Parabéns!', 'Música adicionada a Playlist com sucesso', 'success')
                this.getTracks()
                this.setState({ inputName: "", inputArtist: "", inputUrl: "" })
            }).catch(err => {
                swal.fire('OOOPS', 'Algo deu errado... Tente novamente', 'error')
            })
    }

    deleteTrack = (id) => {
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
                axios.delete(`${url}${this.props.detailedPlaylist.id}/tracks/${id}`, headers)
                    .then(res => {
                        swal.fire('Tudo certo!', 'Música deletada com sucesso', 'success')
                        this.getTracks()
                    }).catch(err => {
                        swal.fire('OOOPS', 'Algo deu errado... Tente novamente', 'error')
                    })
            }
        })

    }

    updateInputName = (e) => {
        this.setState({ inputName: e.target.value })
    }

    updateInputArtist = (e) => {
        this.setState({ inputArtist: e.target.value })
    }

    updateInputUrl = (e) => {
        this.setState({ inputUrl: e.target.value })
    }



    render() {

        const trackList = this.state.detailedPlaylist.map(track => {
            return (
                <ContainerTrack key={track.id}>
                    <div>
                        <h3>Artista:</h3>
                        <p>{track.artist}</p>
                    </div>
                    <div>
                        <h3>Música:</h3>
                        <p>{track.name}</p>
                    </div>
                    <audio controls><source src={track.url} type="audio/mpeg" /></audio>
                    <img src={trashIcon} alt="" onClick={() => this.deleteTrack(track.id)} />
                </ContainerTrack>
            )
        })

        return (
            <Container>
                <button onClick={this.props.comeBack}>Voltar para Playlists</button>
                <h2>Músicas de {this.props.detailedPlaylist.name}</h2>
                {this.state.detailedPlaylist.length ? trackList : <em>** Não há músicas nessa Playlist **</em>}
                <ContainerAdd>
                    <h2>Adicionar Música</h2>
                    <p>Nome da Música:</p>
                    <input placeholder="Digite aqui o nome" value={this.state.inputName} onChange={this.updateInputName} />
                    <p>Artista / Banda:</p>
                    <input placeholder="Digite aqui o artista" value={this.state.inputArtist} onChange={this.updateInputArtist} />
                    <p>URL da música:</p>
                    <input placeholder="Digite aqui a URL" value={this.state.inputUrl} onChange={this.updateInputUrl} />
                    <div>
                        <button onClick={this.addTrack}>Adicionar</button>
                    </div>
                </ContainerAdd>
            </Container>
        )
    }
}

export default Details