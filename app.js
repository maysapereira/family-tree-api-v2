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

//

const members = [
   {id: 1, "name": "Sony"},
   {id: 2, "name": "Mike"}
]

app.get('/members', (req, res) => {
   res.status(200).json(members)
})

app.post('/members', (req, res) => {
   members.push(req.body)
   res.status(201).send('Membro adicionado na árvore genealógica')
})

app.put('/members/:id', (req, res) => {
   let index = searchMember(req.params.id)
   members[index].name = req.body.name
   res.status(200).json(members)
})

function searchMember(id) {
   return members.findIndex(members => members.id == id)
}

export default app