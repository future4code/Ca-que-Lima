import { useHistory } from "react-router-dom"


function Home() {
  
  const history = useHistory()

  const goToListTrips = () => {
    history.push('/trips/list')
  }

  const goToLogin = () => {
    history.push('/login')
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