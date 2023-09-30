import express from 'express'
import http from 'http'
// import { initAPI } from 'api'
import cors from 'cors'

import routes from 'routes'
;(async () => {
  const app = express()

  const HOST = 'localhost'
  const PORT = 3000

  const server = http.createServer(app)

  app.use(cors())
  // app.use(bodyParser.urlencoded({ extended: false }))
  // app.use(bodyParser.json())
  app.use(express.json())
  app.use(routes)
  //   initAPI(app)
  app.get('/healthcheck', (__, res) => {
    const data = {
      uptime: process.uptime(),
      message: 'Ok',
      date: new Date()
    }
    res.status(200).send(data)
  })

  server.listen(PORT, () => {
    console.log(`Server running on http://${HOST}:${PORT}`)
  })
})()
