import dotenv from 'dotenv'

dotenv.config()

const config = {
  openaiApiKey: process.env.OPENAI_API_KEY,
  port: process.env.PORT || 3000
}

export { config }
