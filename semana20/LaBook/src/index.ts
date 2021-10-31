import app  from "./app"
import { UserController } from '../src/controllers/UserController'
import { PostController } from "./controllers/PostController"

const userController = new UserController()
const postController = new PostController()

app.post('/signup', userController.signUp)
app.post('/login', userController.logIn)
app.get('/all', userController.getAll)
app.post('/post', postController.create)
app.get('/post/:id', postController.getPostById)