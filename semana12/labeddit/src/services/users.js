import axios from 'axios'
import { BASE_URL } from '../constants/urls'
import { goToHome } from '../routes/coordinator'

export const login = (body, history, setRightButtonText) => {

    axios.post(`${BASE_URL}/users/login`, body)
    .then(res => {
        localStorage.setItem('tokenLabEddit', res.data.token)
        goToHome(history)
        setRightButtonText('Logout')
    }).catch(err => 
        alert(err.response.data)    
    )
}

export const signUp = (body, history, setRightButtonText) => {

    axios.post(`${BASE_URL}/users/signup`, body)
    .then(res => {
        localStorage.setItem('tokenLabEddit', res.data.token)
        goToHome(history)
        setRightButtonText('Logout')
        alert('Cadastro realizado com sucesso!')
    }).catch(err => 
        alert(err.response.data)    
    )
}