const express = require('express')
const http = require("node:http")
const cors = require('cors')

const app = express()

app.use(cors())

app.get('/data', async (req, res) => {
  const { url } = req.query

  try {
    fetch(url)
      .then(j => j.text())
      .then(data => {
        const title = data.match(/<title>(.*?)<\/title>/i)
        const favicon = data.match(/<link rel="icon" href="(.*?)"/i)
        
        res.json({
          title: title,
          favicon
        })

      })

  } catch (error) {

  }


})


app.listen(process.env.PORT ?? 3000)
