const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())

app.get('/', (req, res) => {
  console.log("asdasdsadasdasdas")
  res.json({
    msj: 'Hola desde FL0'
  })
})


app.listen(process.env.PORT ?? 3000)
