import express from 'express'
import db from './src/config/dbConexao.js'

const port = process.env.PORT || 3000

const app = express()
app.use(express.json())

db.on("error", console.log.bind(console, "Houve um erro ao se conectar com o banco de dados"))
db.once("open", ()=> {
   console.log("Banco de dados conectado com sucesso")
})

app.get('/', (req,res)=> res.send("Funcionando"))
app.listen(port, ()=> console.log(`Servidor rodando na porta: ${port}`))