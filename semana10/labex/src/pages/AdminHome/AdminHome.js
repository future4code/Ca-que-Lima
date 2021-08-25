import { useProtectedPage } from '../../hooks/useProtectedPage'
import { useHistory } from 'react-router-dom'
import { useRequestData } from '../../hooks/useRequestData'
import { CardTrip, Container, ContainerButtons } from './styles'
import { BsTrash } from 'react-icons/bs'
import axios from 'axios'
import swal from 'sweetalert2'

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
    swal.fire({
      title: 'Tem certeza?',
      text: "Não será possível reverter isso!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim, apague!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/caiquelima/trips/${id}`, headers)
          .then(res => {
            window.location.reload()
            swal.fire('Tudo certo!', 'Viagem deletada com sucesso', 'success')
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

    })
  }

  const tripList = trips && trips.trips.map(trip => {
    return (
      <CardTrip key={trip.id}>
        <div onClick={() => goToDetails(trip.id)} >
          <span>{trip.name}</span>
        </div>
        <BsTrash onClick={() => deleteTrip(trip.id)} />
      </CardTrip>
    )
  })

  return (
    <Container>
      <h1>Painel Administrativo</h1>
      <ContainerButtons>
        <button onClick={goBack}>Voltar</button>
        <button onClick={goToCreateTrip}>Criar Viagem</button>
        <button onClick={logout}>Logout</button>
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

export default AdminHome