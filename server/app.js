import express from 'express'
import cors from 'cors'
import { routerApi } from './src/routes/index.js'

function createApp () {
  const app = express()
  app.use(cors())
  app.use(express.json())

  app.get('/', (req, res) => {
    res.send('Hello from CHATGPT')
  })

  routerApi(app)
  return app
}

export { createApp }
