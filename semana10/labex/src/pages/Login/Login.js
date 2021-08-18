import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

function Login() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const history = useHistory()

  const login = (e) => {
    const body = {
      email: email,
      password: password
    }

    axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/caiquelima/login', body)
      .then(res => {
        localStorage.setItem('token', res.data.token)
        history.push('/admin/trips/list')
      }).catch(err => {
        alert(err.response.data.message)
      })
      e.preventDefault()
  }

  const updateEmail = (e) => {
    setEmail(e.target.value)
  }

  const updatePassword = (e) => {
    setPassword(e.target.value)
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={login}>
        <input
          placeholder='Email'
          onChange={updateEmail}
        />
        <input
          placeholder='Senha'
          type='password'
          onChange={updatePassword}
        />
        <button type='submit'>Enviar</button>
      </form>
    </div>
  )
}

export default Login