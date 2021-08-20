import { useState } from 'react'
import { useRequestData } from '../../hooks/useRequestData'
import useForms from '../../hooks/useForms'
import { CountryDropdown } from 'react-country-region-selector';
import axios from 'axios';

function ApplicationForm() {
  const [inputTrip, setInputTrip] = useState('default')
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

  const apply = (e) => {
    const body = {
      ...form,
      country: inputCountry
    }

    axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/caiquelima/trips/${inputTrip}/apply`, body)
      .then(res => {
        console.log(res.data)
      }).catch(err => {
        console.log(err.response)
      })
    e.preventDefault()
  }

  return (
    <div>
      <h1>Inscreva-se para uma viagem!</h1>
      <form>
        <select value={inputTrip} onChange={updateTrip}>
          <option value='default' hidden>Selecione uma viagem</option>
          {tripList}
        </select>
        <input placeholder='Nome' onChange={onChange} name='name' value={form.name} />
        <input placeholder='Idade (Deve ser maior de idade)' onChange={onChange} name='age' value={form.age} type='number' min='18' max='60' />
        <input placeholder='Profissão' onChange={onChange} name='profession' value={form.profession} />
        <CountryDropdown
          defaultOptionLabel='Selecione um país'
          value={inputCountry}
          onChange={(val) => updateCountry(val)}
          name='country'
        />
        <textarea placeholder='Por que você deve ser escolhido?' onChange={onChange} name='applicationText' value={form.applicationText} />
        <button onClick={apply}>Enviar</button>
      </form>
    </div>
  )
}

export default ApplicationForm