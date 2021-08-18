import { useState } from 'react'
import { useRequestData } from '../../hooks/useRequestData'

function ApplicationForm() {
  const [inputTrip, setInputTrip] = useState('default')
  const [inputName, setInputName] = useState('')
  const [inputAge, setInputAge] = useState('')
  const [inputProfession, setInputProfession] = useState('')
  const [inputCountry, setInputCountry] = useState('default')
  const [inputText, setInputText] = useState('')

  const [trips] = useRequestData('https://us-central1-labenu-apis.cloudfunctions.net/labeX/caiquelima/trips')
  const tripList = trips && trips.trips.map(object => {
    return <option key={object.id} value={object.name}>{object.name}</option>
  })

  return (
    <div>
      <h1>Inscreva-se para uma viagem!</h1>
      <form>
        <select>
          <option value='default' hidden>Selecione uma viagem</option>
          {tripList}
        </select>
        <input placeholder='Nome' />
        <input placeholder='Idade' />
        <input placeholder='Profissão' />
        <input placeholder='País' />
        <textarea placeholder='Por que você deve ser escolhido?' />
        <button>Enviar</button>
      </form>
    </div>
  )
}

export default ApplicationForm