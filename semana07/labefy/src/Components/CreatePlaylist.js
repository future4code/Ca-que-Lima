import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import swal from 'sweetalert2'

const Container = styled.div`
    width: 450px;
    height: 300px;
    margin-top: 50px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    background-color: #242528;
    border-radius: 10px;
    box-shadow: 0 0 10px 5px #1DB954;

    > div {
        display: flex;
        justify-content: space-around;
        margin-top: 50px;
    }
`

const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/'

const headers = {
    headers: {
        Authorization: "caique-lima-lovelace"
    }
}

class CreatePlaylist extends React.Component {

    state = {
        inputTitle: ""
    }

    updateTitle = (e) => {
        this.setState({ inputTitle: e.target.value })
    }

    createsPlaylist = () => {
        const body = {
            name: this.state.inputTitle
        }

        axios.post(url, body, headers)
            .then(res => {
                swal.fire('Ótimo!', 'Playlist criada com sucesso!', 'success')
                this.setState({ inputTitle: "" })
            }).catch(err => {
                swal.fire('Sinto muito', 'Já existe uma Playlist com esse nome, ou o nome é inválido', 'error')
            })
    }

    render() {
        return (
            <Container>
                <h2>Criar nova Playlist</h2>
                <p>Título:</p>
                <input placeholder="Digite aqui o título" value={this.state.inputTitle} onChange={this.updateTitle} />
                <div>
                    <button onClick={this.createsPlaylist}>Criar</button>
                    <button onClick={this.props.updatePage}>Ver Playlists</button>
                </div>
            </Container>
        )
    }
}

export default CreatePlaylist