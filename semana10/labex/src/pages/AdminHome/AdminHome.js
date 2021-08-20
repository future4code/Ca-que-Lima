import { useProtectedPage } from '../../hooks/useProtectedPage'
import { useHistory } from 'react-router-dom'
import { useRequestData } from '../../hooks/useRequestData'
import axios from 'axios'

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

  const deleteTrip = (id) => {
    const headers = {
      headers: {
        auth: localStorage.getItem('token')
      }
    }
    axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/caiquelima/trips/${id}`, headers)
      .then(res => {
        alert('Viagem deletada com sucesso')
        window.location.reload()
      }).catch(err => {
        console.log(err.response)
      })
  }

  const tripList = trips && trips.trips.map(trip => {
    return (
      <div key={trip.id}>
        <div onClick={() => goToDetails(trip.id)} >
          <span>{trip.name}</span>
        </div>
        <button onClick={() => deleteTrip(trip.id)}>Deletar</button>
      </div>
    )
  })

  return (
    <div>
      <h1>AdminHome</h1>
      <button onClick={goBack}>Voltar</button>
      <button onClick={goToCreateTrip}>Criar Viagem</button>
      <button onClick={logout}>Logout</button>
      {loadingTrips && <p>Carregando...</p>}
      {!loadingTrips && errorTrips && <p>Ocorreu um erro</p>}
      {!loadingTrips && trips && trips.trips.length > 0 && tripList}
      {!loadingTrips && trips && trips.trips.length === 0 && (
        <p>Nenhuma viagem encontrada!</p>
      )}
    </div>
  )
}

export default AdminHome