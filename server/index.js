import { createApp } from './app.js'
import { config } from './src/config/index.js'

const app = createApp()

app.listen(config.port, () => {
  console.log(`Server: ${config.port}`)
})
