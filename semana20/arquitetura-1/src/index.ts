import app  from "./app"
import { UserController } from '../src/controllers/UserController'

app.post('/signup', UserController.signUp)
app.post('/login', UserController.logIn)