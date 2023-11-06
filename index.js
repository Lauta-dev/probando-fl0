const express = require('express')
const http = require("node:http")
const cors = require('cors')

const app = express()

app.use(cors())

app.get('/data', async (req, res) => {
  const { url } = req.query

  try {
    fetch("https://app.fl0.com/mi-backend/new-project/dev/probando-fl0/deployments")
      .then(j => j.text())
      .then(data => {
        const title = data.match(/<title>(.*?)<\/title>/i)

        res.json({
          title: title,
        })

      })

  } catch (error) {

  }


})


app.listen(process.env.PORT ?? 3000)
