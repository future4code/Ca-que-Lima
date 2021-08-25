import { useHistory } from "react-router-dom"
import { useRequestData } from '../../hooks/useRequestData'
import { Container, ContainerButtons, CardTrip, Button } from "./styles"

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
      <CardTrip key={trip.id}>
        <div>
          <p>Nome:</p><span>{trip.name}</span>
        </div>
        <div>
          <p>Descrição:</p><span>{trip.description}</span>
        </div>
        <div>
          <p>Planeta:</p><span>{trip.planet}</span>
        </div>
        <div>
          <p>Duração:</p><span>{trip.durationInDays}</span>
        </div>
        <div>
          <p>Data:</p><span>{dataFormatada}</span>
        </div>

      </CardTrip>
    )
  })

  return (
    <Container>
      <h1>Viagens disponíveis</h1>
      <ContainerButtons>
        <Button onClick={goBack}>Voltar</Button>
        <Button onClick={goToApplication}>Inscrever-se</Button>
      </ContainerButtons>
      {loadingTrips && <p>Carregando...</p>}
      {!loadingTrips && errorTrips && <p>Ocorreu um erro</p>}
      {!loadingTrips && trips && trips.trips.length > 0 && tripList}
      {!loadingTrips && trips && trips.trips.length === 0 && (
        <p>Nenhuma viagem encontrada!</p>
      )}
    </Container>
  )
}

export default ListTrip