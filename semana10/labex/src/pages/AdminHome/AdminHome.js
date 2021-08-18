import { useProtectedPage } from '../../hooks/useProtectedPage'
import { useHistory } from "react-router-dom"

function AdminHome() {

  const history = useHistory()

  const goToListTrips = () => {
    history.push('/trips/list')
  }

  useProtectedPage()
  return (
    <div>
      <h1>AdminHome</h1>
      <button onClick={goToListTrips}>Ver Viagens</button>
      <button>Área de Admin</button>
    </div>
  )
}

export default AdminHome