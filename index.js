const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.json({
    msj: 'Hola desde FL0'
  })
})


app.listen(3000)
