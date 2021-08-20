import axios from 'axios'
import { useHistory } from 'react-router-dom'
import useForm from '../../hooks/useForms'
import { useProtectedPage } from '../../hooks/useProtectedPage'

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
        alert('Viagem criada com sucesso')
      }).catch(err => {
        console.log(err.response)
      })

    e.preventDefault()
    cleanFields()
  }

  return (
    <div>
      <h1>Criar Viagem</h1>
      <form onSubmit={sendTrip}>
        <input name='name' value={form.name} placeholder='Nome' required onChange={onChange} />
        <input name='planet' value={form.planet} placeholder='Planeta' required onChange={onChange} />
        <input name='date' value={form.date} placeholder='Data' required type='date' onChange={onChange} />
        <input name='description' value={form.description} placeholder='Descrição' required onChange={onChange} />
        <input name='durationInDays' value={form.durationInDays} placeholder='Duração em dias' required type='number' onChange={onChange} />
        <button type='submit'>Criar</button>
      </form>
      <button onClick={goBack}>Voltar</button>
    </div>
  )
}

export default CreateTrip