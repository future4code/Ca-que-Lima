import { useState } from 'react'
import { useRequestData } from '../../hooks/useRequestData'
import { CountryDropdown } from 'react-country-region-selector';
import axios from 'axios';

function ApplicationForm() {
  const [inputTrip, setInputTrip] = useState('default')
  const [inputName, setInputName] = useState('')
  const [inputAge, setInputAge] = useState('')
  const [inputProfession, setInputProfession] = useState('')
  const [inputCountry, setInputCountry] = useState('default')
  const [inputText, setInputText] = useState('')

  const [trips] = useRequestData('https://us-central1-labenu-apis.cloudfunctions.net/labeX/caiquelima/trips')
  const tripList = trips && trips.trips.map(object => {
    return <option key={object.id} value={object.id}>{object.name}</option>
  })

  const updateTrip = (e) => {
    setInputTrip(e.target.value)
  }

  const updateName = (e) => {
    setInputName(e.target.value)
  }

  const updateAge = (e) => {
    setInputAge(e.target.value)
  }

  const updateProfession = (e) => {
    setInputProfession(e.target.value)
  }

  const updateCountry = (val) => {
    setInputCountry(val)
  }

  const updateText = (e) => {
    setInputText(e.target.value)
  }

  const apply = (e) => {
    const body = {
      name: inputName,
      age: inputAge,
      applicationText: inputText,
      profession: inputProfession,
      country: inputCountry
    }

    axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/caiquelima/trips/${inputTrip}/apply`)
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
        <input placeholder='Nome' onChange={updateName}/>
        <input placeholder='Idade' onChange={updateAge}/>
        <input placeholder='Profissão' onChange={updateProfession}/>
        <CountryDropdown
          defaultOptionLabel='Selecione um país'
          value={inputCountry}
          onChange={(val) => updateCountry(val)}
        />
        <textarea placeholder='Por que você deve ser escolhido?' onChange={updateText}/>
        <button onClick={apply}>Enviar</button>
      </form>
    </div>
  )
}

export default ApplicationForm