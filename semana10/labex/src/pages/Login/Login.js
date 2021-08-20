import { useHistory } from 'react-router-dom'
import axios from 'axios'
import useForm from '../../hooks/useForms'

function Login() {

  const { form, onChange } = useForm({ email: '', password: '' })

  const history = useHistory()

  const login = (e) => {

    axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/caiquelima/login', form)
      .then(res => {
        localStorage.setItem('token', res.data.token)
        history.push('/admin/trips/list')
      }).catch(err => {
        alert(err.response.data.message)
      })
    e.preventDefault()
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={login}>
        <input
          placeholder='Email'
          type='email'
          onChange={onChange}
          value={form.email}
          name='email'
          required
        />
        <input
          placeholder='Senha'
          type='password'
          onChange={onChange}
          value={form.password}
          name='password'
          required
        />
        <button type='submit'>Enviar</button>
      </form>
    </div>
  )
}

export default Login