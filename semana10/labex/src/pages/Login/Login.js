import { useHistory } from 'react-router-dom'
import axios from 'axios'
import useForm from '../../hooks/useForms'
import swal from 'sweetalert2'
import { Container, ContainerButtons, Form, Input } from './styles'

function Login() {

  const { form, onChange } = useForm({ email: '', password: '' })

  const history = useHistory()

  const goBack = () => {
    history.goBack()
  }

  const login = (e) => {

    axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/caiquelima/login', form)
      .then(res => {
        localStorage.setItem('token', res.data.token)
        history.push('/admin/trips/list')
      }).catch(err => {
        swal.fire({
          icon: 'error',
          title: 'OOOPS...',
          text: err.response.data.message,
          showConfirmButton: true,
          confirmButtonColor: '#D73743'
        })
      })
    e.preventDefault()
  }

  return (
    <Container>
      <h1>Login</h1>
      <Form onSubmit={login}>
        <Input
          placeholder='Email'
          type='email'
          onChange={onChange}
          value={form.email}
          name='email'
          required
        />
        <Input
          placeholder='Senha'
          type='password'
          onChange={onChange}
          value={form.password}
          name='password'
          required
        />
        <ContainerButtons>
          <button type='submit'>Entrar</button>
        </ContainerButtons>
      </Form>
      <button onClick={goBack}>Voltar</button>
    </Container>
  )
}

export default Login