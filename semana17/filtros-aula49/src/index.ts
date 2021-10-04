import express from "express"
import cors from "cors"
import { AddressInfo } from "net"
import getAllUsers from "./endpoints/getAllUsers"
import getUsersByName from "./endpoints/getUsersByName"
import getUsersByType from "./endpoints/getUsersByType"
import getUsersOrdered from "./endpoints/getUsersOrdered"
import getUsersPages from "./endpoints/getUsersPages"

export const app = express()

app.use(express.json())
app.use(cors())


// Exercício 1
// app.get("/users/all", getAllUsers)
// app.get("/users", getUsersByName)
// app.get("/users/:type", getUsersByType)

// Exercício 2
// app.get("/users", getUsersOrdered)

// Exercício 3
app.get("/users/:page", getUsersPages)

const server = app.listen(process.env.PORT || 3003, () => {
   if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost:${address.port}`);
   } else {
      console.error(`Failure upon starting server.`);
   }
})