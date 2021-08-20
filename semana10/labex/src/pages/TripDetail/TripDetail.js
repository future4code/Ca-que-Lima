import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useProtectedPage } from '../../hooks/useProtectedPage'
import { useRequestData } from '../../hooks/useRequestData'
import { useHistory } from 'react-router-dom'

function TripDetail() {
  useProtectedPage()

  const params = useParams()

  const headers = {
    headers: {
      auth: localStorage.getItem('token')
    }
  }

  const decideCandidate = (id, decision) => {
    const body = {
      approve: decision
    }

    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/caiquelima/trips/${params.id}/candidates/${id}/decide`

    axios.put(url, body, headers)
      .then(res => {
        if (id === true) {
          alert('Candidato aprovado!')
          window.location.reload()
        } else {
          alert('Candidato reprovado!')
          window.location.reload()
        }
      }).catch(err => {
        console.log(err.response)
      })
  }

  const [trip] = useRequestData(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/caiquelima/trip/${params.id}`, headers)

  const candidateList = trip && trip.trip.candidates.map(candidate => {
    return (
      <div key={candidate.id}>
        <p>Nome:</p>
        <span>{candidate.name}</span>
        <p>Profissão:</p>
        <span>{candidate.profession}</span>
        <p>Idade:</p>
        <span>{candidate.age}</span>
        <p>País:</p>
        <span>{candidate.country}</span>
        <p>Texto de candidatura:</p>
        <span>{candidate.applicationText}</span>
        <button onClick={() => decideCandidate(candidate.id, true)}>Aprovar</button>
        <button onClick={() => decideCandidate(candidate.id, false)}>Reprovar</button>
      </div>
    )
  })

  const approvedCandidates = trip && trip.trip.approved.map(candidate => {
    return <li>{candidate.name}</li>
  })

  const history = useHistory()

  const goBack = () => {
    history.goBack()
  }

  const data = trip && new Date(trip.trip.date)
  const dataFormatada = trip && data.toLocaleDateString("pt-BR", {
    timeZone: "UTC",
  })

  return (
    <div>

      {trip ? (
        <div>
          <h1>{trip.trip.name}</h1>
          <p>Nome:</p>
          <span>{trip.trip.name}</span>
          <p>Descrição:</p>
          <span>{trip.trip.description}</span>
          <p>Planeta:</p>
          <span>{trip.trip.planet}</span>
          <p>Duração:</p>
          <span>{trip.trip.durationInDays}</span>
          <p>Data:</p>
          <span>{dataFormatada}</span>
        </div>) : <p>Carregando...</p>}

      <button onClick={goBack}>Voltar</button>

      <div>
        <h2>Candidatos pendentes</h2>
        {trip && trip.trip.candidates.length ? candidateList : <p>Sem candidatos pendentes</p>}
      </div>

      <div>
        <h2>Candidatos aprovados</h2>
        {trip && trip.trip.approved.length ? <ul>{approvedCandidates}</ul> : <p>Sem candidatos aprovados</p>}
      </div>

    </div>
  )
}

export default TripDetail