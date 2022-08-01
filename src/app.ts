import express from "express"
import config from "config"
import router from "./router"

const app = express()

//midleware
app.use(express.json)

//rotas
app.use("/api/", router)

//definição da porta
const port = config.get<number>("port")

app.listen(port, async () =>{
    console.log(`Aplicação rodando na porta: ${port}`)
})
