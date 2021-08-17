import { Switch, Route, BrowserRouter } from 'react-router-dom'
import Home from '../pages/Home/Home'
import ListTrips from '../pages/ListTrips/ListTrips'
import Login from '../pages/Login/Login'
import ApplicationForm from '../pages/ApplicationForm/ApplicationForm'
import TripDetail from '../pages/TripDetail/TripDetail'
import CreateTrip from '../pages/CreateTrip/CreateTrip'
import AdminHome from '../pages/AdminHome/AdminHome'
import Error from '../pages/Error/Error'

function Router() {
  return (
    <BrowserRouter>
      <Switch>

        <Route exact path='/'>
          <Home />
        </Route>

        <Route exact path='/trips/list'>
          <ListTrips />
        </Route>

        <Route exact path='/trips/application'>
          <ApplicationForm />
        </Route>

        <Route exact path='/login'>
          <Login />
        </Route>

        <Route exact path='/admin/trips/list'>
          <AdminHome />
        </Route>

        <Route exact path='/admin/trips/create'>
          <CreateTrip />
        </Route>

        <Route exact path='/admin/trips/:id'>
          <TripDetail />
        </Route>

        <Route>
          <Error />
        </Route>

      </Switch>
    </BrowserRouter>

  )
}

export default Router