import axios from 'axios'
import { useHistory } from 'react-router-dom'
import useForm from '../../hooks/useForms'
import { useProtectedPage } from '../../hooks/useProtectedPage'
import { Container, ContainerButtons, Form, Input } from './styles'
import swal from 'sweetalert2'

function CreateTrip() {
  useProtectedPage()

  const history = useHistory()

  const goBack = () => {
    history.goBack()
  }

  const { form, onChange, cleanFields } = useForm({
    name: '',
    planet: '',
    date: '',
    description: '',
    durationInDays: ''
  })

  const sendTrip = (e) => {
    const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labeX/caiquelima/trips'
    const headers = {
      headers: {
        auth: localStorage.getItem('token')
      }
    }

    axios.post(url, form, headers)
      .then(res => {
        swal.fire('Tudo certo!', 'Viagem criada com sucesso', 'success')
        goBack()
      }).catch(err => {
        swal.fire({
          icon: 'error',
          title: 'OOOPS...',
          text: 'Algo deu errado... tente novamente mais tarde',
          showConfirmButton: true,
          confirmButtonColor: '#D73743'
        })
      })

    e.preventDefault()
    cleanFields()
  }

  return (
    <Container>
      <h1>Criar Viagem</h1>
      <Form onSubmit={sendTrip}>
        <Input name='name' value={form.name} placeholder='Nome' required onChange={onChange} />
        <Input name='planet' value={form.planet} placeholder='Planeta' required onChange={onChange} />
        <Input name='date' value={form.date} placeholder='Data' required type='date' onChange={onChange} />
        <Input name='description' value={form.description} placeholder='Descrição' required onChange={onChange} />
        <Input name='durationInDays' value={form.durationInDays} placeholder='Duração em dias' required type='number' onChange={onChange} />
        <ContainerButtons>
          <button type='submit'>Criar</button>
        </ContainerButtons>
      </Form>
      <button onClick={goBack}>Voltar</button>
    </Container>
  )
}

export default CreateTrip