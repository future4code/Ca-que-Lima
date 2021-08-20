import { useHistory } from "react-router-dom"
import { useRequestData } from '../../hooks/useRequestData'

function ListTrip() {

  const [trips, loadingTrips, errorTrips] = useRequestData('https://us-central1-labenu-apis.cloudfunctions.net/labeX/caiquelima/trips')

  const history = useHistory()

  const goToApplication = () => {
    history.push('/trips/application')
  }

  const goBack = () => {
    history.goBack()
  }



  const tripList = trips && trips.trips.map(trip => {
    const data = new Date(trip.date)
    const dataFormatada = data.toLocaleDateString("pt-BR", {
      timeZone: "UTC",
    })
    return (
      <div key={trip.id}>
        <p>Nome:</p><span>{trip.name}</span>
        <p>Descrição:</p><span>{trip.description}</span>
        <p>Planeta:</p><span>{trip.planet}</span>
        <p>Duração:</p><span>{trip.durationInDays}</span>
        <p>Data:</p><span>{dataFormatada}</span>
      </div>
    )
  })

  return (
    <div>
      <h1>List Trips</h1>
      {loadingTrips && <p>Carregando...</p>}
      {!loadingTrips && errorTrips && <p>Ocorreu um erro</p>}
      {!loadingTrips && trips && trips.trips.length > 0 && tripList}
      {!loadingTrips && trips && trips.trips.length === 0 && (
        <p>Nenhuma viagem encontrada!</p>
      )}
      <button onClick={goBack}>Voltar</button>
      <button onClick={goToApplication}>Inscrever-se</button>
    </div>
  )
}

export default ListTrip