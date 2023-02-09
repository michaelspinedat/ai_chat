import React, { useEffect, useState, useRef } from 'react'
import botIcon from '../../assets/bot.svg'
import './index.css'

function ChatBot({ text }) {
  const [response, setResponse] = useState('')
  const loadInterval = useRef(null)

  useEffect(() => {
    loadInterval.current = setInterval(() => {
      setResponse((curr) => (curr === '...' ? '' : curr.concat('.')))
    }, 300)
    return () => {
      clearInterval(loadInterval.current)
    }
  }, [])

  return (
    <>
      <div className="profile">
        <img
          src={botIcon}
          alt="bot"
        />
      </div>
      <div className="message">
        {response}
      </div>
    </>
  )
}

export default ChatBot
