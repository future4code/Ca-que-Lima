import { useParams } from 'react-router-dom'
import { useProtectedPage } from '../../hooks/useProtectedPage'
import { useRequestData } from '../../hooks/useRequestData'

function TripDetail() {
  useProtectedPage()

  const params = useParams()

  const headers = {
    headers: {
      auth: localStorage.getItem('token')
    }
  }

  const [trip, loadingTrip, errorTrip] = useRequestData(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/caiquelima/trip/${params.id}`, headers)

  const candidateList = trip && trip.trip.candidates.map(candidate => {
    console.log(trip.trip)
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
      </div>
    )
  })

  const approvedCandidates = trip && trip.trip.approved.map(candidate => {
    return (
      <ul>
        <li>{candidate.name}</li>
      </ul>
    )
  })

  return (
    <div>

      {trip && (
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
          <span>{trip.trip.date}</span>
        </div>)}

      <div>
        <h2>Candidatos pendentes</h2>
        {trip ? candidateList : <p>Sem candidatos pendentes</p>}
      </div>

      <div>
        <h2>Candidatos aprovados</h2>
        {trip && trip.trip.approved.length ? approvedCandidates : <p>Sem candidatos aprovados</p>}
      </div>

    </div>
  )
}

export default TripDetail