import { useState } from 'react'
import { useRequestData } from '../../hooks/useRequestData'
import useForms from '../../hooks/useForms'
import { CountryDropdown } from 'react-country-region-selector'
import axios from 'axios'
import { Container, ContainerButtons, Form, Input, Select, TextArea } from './styles'
import { useHistory } from 'react-router-dom'
import swal from 'sweetalert2'

function ApplicationForm() {
  const [inputTrip, setInputTrip] = useState('')
  const [inputCountry, setInputCountry] = useState('default')


  const { form, onChange } = useForms({
    name: '',
    age: '',
    applicationText: '',
    profession: '',
  })

  const [trips] = useRequestData('https://us-central1-labenu-apis.cloudfunctions.net/labeX/caiquelima/trips')
  const tripList = trips && trips.trips.map(object => {
    return <option key={object.id} value={object.id}>{object.name}</option>
  })

  const updateTrip = (e) => {
    setInputTrip(e.target.value)
  }

  const updateCountry = (val) => {
    setInputCountry(val)
  }

  const history = useHistory()

  const goBack = () => {
    history.goBack()
  }

  const apply = (e) => {
    const body = {
      ...form,
      country: inputCountry
    }

    axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/caiquelima/trips/${inputTrip}/apply`, body)
      .then(res => {
        swal.fire({
          icon: 'success',
          title: 'Sucesso! Boa Sorte!',
          showConfirmButton: false,
          timer: 1500
        })
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
  }

  return (
    <Container>
      <h1>Inscreva-se para uma viagem!</h1>
      <Form>
        <Select required value={inputTrip} onChange={updateTrip}>
          <option value='' hidden>Selecione uma viagem</option>
          {tripList}
        </Select>
        <Input required placeholder='Nome' onChange={onChange} name='name' value={form.name} />
        <Input required placeholder='Idade (Deve ser maior de idade)' onChange={onChange} name='age' value={form.age} type='number' min='18' max='60' />
        <Input required placeholder='Profissão' onChange={onChange} name='profession' value={form.profession} />
        <CountryDropdown
          defaultOptionLabel='Selecione um país'
          value={inputCountry}
          onChange={(val) => updateCountry(val)}
          name='country'
        />
        <TextArea required rows='10' placeholder='Por que você deve ser escolhido?' onChange={onChange} name='applicationText' value={form.applicationText} />
        <ContainerButtons>
          <button onClick={apply}>Enviar</button>
        </ContainerButtons>
      </Form>
      <ContainerButtons>
        <button onClick={goBack}>Voltar</button>
      </ContainerButtons>
    </Container>
  )
}

export default ApplicationForm