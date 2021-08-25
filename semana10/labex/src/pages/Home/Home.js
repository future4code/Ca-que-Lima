import { useHistory } from "react-router-dom"
import { Container, ContainerButtons } from './styles'


function Home() {

  const history = useHistory()

  const goToListTrips = () => {
    history.push('/trips/list')
  }

  const goToLogin = () => {
    const token = localStorage.getItem('token')

    if (token) {
      history.push('/admin/trips/list')
    } else {
      history.push('/login')
    }
  }

  return (
    <Container>
      <h1>LabeX</h1>
      <ContainerButtons>
        <button onClick={goToListTrips}>Viagens</button>
        <button onClick={goToLogin}>Login Admin</button>
      </ContainerButtons>
    </Container>
  )
}

export default Home