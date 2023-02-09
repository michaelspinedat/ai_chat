import { Router } from 'express'
import chatRouter from './chat.router.js'

function routerApi(app) {
  const router = Router()
  app.use('/api/v1', router)
  router.use('/chatgpt', chatRouter)
}

export { routerApi }
