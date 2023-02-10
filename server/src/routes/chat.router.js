import { Router } from 'express'
import ChatService from '../services/chat.service.js'

const router = Router()
const service = new ChatService()

router.get('/', async (req, res) => {
  res.send('ChatGPT')
})

router.post('/', async (req, res) => {
  const { prompt } = req.body
  try {
    const response = await service.createCompletion(prompt)
    res
      .status(200)
      .json({ bot: response.data.choices[0].text })
  } catch (error) {
    res
      .status(500)
      .json({ error })
  }
})

export default router
