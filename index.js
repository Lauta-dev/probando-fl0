const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())

app.get('/', (req, res) => {
  res.json({
    msj: 'Hola desde FL0'
  })
})


app.listen(3000)
