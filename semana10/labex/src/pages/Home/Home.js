import { useHistory } from "react-router-dom"


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
    <div>
      <h1>Home</h1>
      <button onClick={goToListTrips}>Viagens</button>
      <button onClick={goToLogin}>Login Admin</button>
    </div>
  )
}

export default Home