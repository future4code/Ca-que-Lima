import axios from 'axios'
import swal from 'sweetalert2'
import { useParams } from 'react-router-dom'
import { useProtectedPage } from '../../hooks/useProtectedPage'
import { useRequestData } from '../../hooks/useRequestData'
import { useHistory } from 'react-router-dom'
import { Container, CardTrip, CardCandidate, ContainerButtons } from './styles'


function TripDetail() {
  useProtectedPage()

  const params = useParams()

  const headers = {
    headers: {
      auth: localStorage.getItem('token')
    }
  }

  const [trip] = useRequestData(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/caiquelima/trip/${params.id}`, headers)

  const candidateList = trip && trip.trip.candidates.map(candidate => {
    return (
      <CardCandidate key={candidate.id}>
        <div>
          <p>Nome:</p>
          <span>{candidate.name}</span>
        </div>
        <div>
          <p>Profissão:</p>
          <span>{candidate.profession}</span>
        </div>
        <div>
          <p>Idade:</p>
          <span>{candidate.age}</span>
        </div>
        <div>
          <p>País:</p>
          <span>{candidate.country}</span>
        </div>
        <div>
          <p>Texto de candidatura:</p>
          <span>{candidate.applicationText}</span>
        </div>
        <ContainerButtons>
          <button onClick={() => decideCandidate(candidate.id, true)}>Aprovar</button>
          <button onClick={() => decideCandidate(candidate.id, false)}>Reprovar</button>
        </ContainerButtons>

      </CardCandidate>
    )
  })

  const approvedCandidates = trip && trip.trip.approved.map(candidate => {
    return <li key={candidate.id}>{candidate.name}</li>
  })

  const decideCandidate = (id, decision) => {
    const body = {
      approve: decision
    }

    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/caiquelima/trips/${params.id}/candidates/${id}/decide`

    axios.put(url, body, headers)
      .then(res => {
        if (decision === true) {
          swal.fire({
            icon: 'success',
            title: 'Candidato aprovado!',
            showConfirmButton: false,
            timer: 2000
          })
          window.location.reload()
        } else {
          swal.fire({
            icon: 'success',
            title: 'Candidato reprovado!',
            showConfirmButton: false,
            timer: 2000
          })
          window.location.reload()
        }
      }).catch(err => {
        swal.fire({
          icon: 'error',
          title: 'OOOPS...',
          text: 'Algo deu errado... tente novamente mais tarde',
          showConfirmButton: true,
          confirmButtonColor: '#D73743'
        })
      })
  }

  const history = useHistory()

  const goBack = () => {
    history.goBack()
  }

  const data = trip && new Date(trip.trip.date)
  const dataFormatada = trip && data.toLocaleDateString("pt-BR", {
    timeZone: "UTC",
  })

  return (
    <Container>

      {trip ? (
        <div>
          <h1>{trip.trip.name}</h1>
          <CardTrip key={trip.id}>
            <div>
              <p>Nome:</p><span>{trip.trip.name}</span>
            </div>
            <div>
              <p>Descrição:</p><span>{trip.trip.description}</span>
            </div>
            <div>
              <p>Planeta:</p><span>{trip.trip.planet}</span>
            </div>
            <div>
              <p>Duração:</p><span>{trip.trip.durationInDays}</span>
            </div>
            <div>
              <p>Data:</p><span>{dataFormatada}</span>
            </div>
          </CardTrip>
        </div>

      ) : <p>Carregando...</p>}

      <button onClick={goBack}>Voltar</button>

      <div>
        <h2>Candidatos pendentes</h2>
        {trip && trip.trip.candidates.length ? candidateList : <p>Sem candidatos pendentes</p>}
      </div>

      <div>
        <h2>Candidatos aprovados</h2>
        {trip && trip.trip.approved.length ? approvedCandidates : <p>Sem candidatos aprovados</p>}
      </div>

    </Container>
  )
}

export default TripDetail