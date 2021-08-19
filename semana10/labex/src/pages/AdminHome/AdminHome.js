import { useProtectedPage } from '../../hooks/useProtectedPage'
import { useHistory } from "react-router-dom"
import { useRequestData } from '../../hooks/useRequestData'

function AdminHome() {
  useProtectedPage()

  const [trips, loadingTrips, errorTrips] = useRequestData('https://us-central1-labenu-apis.cloudfunctions.net/labeX/caiquelima/trips')

  const history = useHistory()

  const goToCreateTrip = () => {
    history.push('/admin/trips/create')
  }

  const goBack = () => {
    history.push('/')
  }

  const logout = () => {
    history.push('/')
    localStorage.clear()
  }

  const goToDetails = (id) => {
    history.push(`/admin/trips/${id}`)
  }

  const tripList = trips && trips.trips.map(trip => {
    return (
      <div key={trip.id} onClick={() => goToDetails(trip.id)} >
        <span>{trip.name}</span>
        <button>Deletar</button>
      </div>
    )
  })

  return (
    <div>
      <h1>AdminHome</h1>
      <button onClick={goBack}>Voltar</button>
      <button onClick={goToCreateTrip}>Criar Viagem</button>
      <button onClick={logout}>Logout</button>
      {tripList}
    </div>
  )
}

export default AdminHome