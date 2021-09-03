import axios from 'axios'
import { BASE_URL } from '../constants/urls'

export const upVote = (id) => {

    const headers = {
        headers: {
            Authorization: localStorage.getItem('tokenLabEddit')
        }
    }

    const body = {
        direction: 1
    }

    axios.post(`${BASE_URL}/posts/${id}/votes`, body, headers)
    .then(res => {
        console.log(res.data)
    }).catch(err => {
        console.log(err.response.data)
    })
}


export const downVote = (id) => {

    const headers = {
        headers: {
            Authorization: localStorage.getItem('tokenLabEddit')
        }
    }

    const body = {
        direction: -1
    }

    axios.put(`${BASE_URL}/posts/${id}/votes`, body, headers)
    .then(res => {
        console.log(res.data)
    }).catch(err => {
        console.log(err.response.data)
    })
}