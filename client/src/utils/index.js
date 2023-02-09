// eslint-disable-next-line import/no-extraneous-dependencies
import { v4 as uuidv4 } from 'uuid'

function generateUniqueId(prevId) {
  const id = uuidv4()
  return id === prevId ? generateUniqueId(id) : id
}

export { generateUniqueId }
