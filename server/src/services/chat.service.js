import { Configuration, OpenAIApi } from 'openai'
import { config } from '../config/index.js'

class ChatService {
  constructor() {
    const openaiConfig = new Configuration({
      apiKey: config.openaiApiKey,
    })
    this.openai = new OpenAIApi(openaiConfig)
  }

  async createCompletion(prompt) {
    return this.openai.createCompletion({
      model: 'text-davinci-003',
      prompt,
      temperature: 0,
      max_tokens: 3000,
      top_p: 1,
      frequency_penalty: 0.5,
      presence_penalty: 0,
    })
  }
}

export default ChatService
