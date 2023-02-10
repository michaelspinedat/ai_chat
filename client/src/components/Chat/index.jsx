import React, {
  useCallback, useRef, useState,
} from 'react'
import './index.css'
import Form from '../Form'
import { generateUniqueId } from '../../utils'
import ChatStripe from '../ChatStripe'

function Chat() {
  const [chats, setChats] = useState([])
  const [prompt, setPrompt] = useState('')
  const refContainer = useRef(null)

  const handlePromptChange = useCallback(
    (newPromt) => setPrompt(newPromt),
    [setPrompt],
  )

  const handleSubmit = useCallback(
    () => {
      const chatId = generateUniqueId()
      setChats((curr) => [...curr, {
        id: chatId, textUser: prompt,
      }])
      setPrompt('')
    },
    [prompt, setChats],
  )

  return (
    <>
      <div id="chat_container" ref={refContainer}>
        {
          chats.length > 0
          && chats.map(({
            id, textUser,
          }) => (
            <div key={id}>
              <ChatStripe text={textUser} />
              <ChatStripe isAi text={textUser} />
            </div>
          ))
        }
      </div>
      <Form
        value={prompt}
        onSubmit={handleSubmit}
        onChange={handlePromptChange}
      />
    </>
  )
}

export default Chat
