import app  from "./app"
import createProduct from "./endpoints/createProduct"
import createPurchase from "./endpoints/createPurchase"
import createTicket from "./endpoints/createTicket"
import createUser from "./endpoints/createUser"
import getAllProducts from "./endpoints/getAllProducts"
import getAllTickets from "./endpoints/getAllTickets"
import getAllUsers from "./endpoints/getAllUsers"

app.get('/users', getAllUsers)
app.get('/products', getAllProducts)
app.get('/tickets', getAllTickets)
app.post('/users', createUser)
app.post('/products', createProduct)
app.post('/tickets', createTicket)
app.post ('/purchases', createPurchase)