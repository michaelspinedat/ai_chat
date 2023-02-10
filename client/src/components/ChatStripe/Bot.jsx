import React, { useEffect, useState, useRef } from 'react'
import botIcon from '../../assets/bot.svg'
import './index.css'
import { config } from '../../config'

function ChatBot ({ prompt }) {
  const [text, setText] = useState('')
  const [response, setResponse] = useState('')
  const loadInterval = useRef(null)
  const responseIndex = useRef(0)
  const messageRef = useRef(null)

  const clearLoadInterval = () => {
    clearInterval(loadInterval.current)
    loadInterval.current = null
  }

  useEffect(() => {
    const getResponse = async () => {
      try {
        const res = await fetch(`${config.serverUri}/api/v1/chatgpt`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ prompt })
        })

        clearLoadInterval()
        setText('')

        if (res.ok) {
          const data = await res.json()
          const parsedData = data.bot.trim()
          setResponse(parsedData)
        } else {
          setResponse('Something went wrong')
        }
      } catch (error) {
        console.error(error)
      }
    }

    const timeoutId = setTimeout(() => {
      getResponse()
    }, 1000)

    return () => clearTimeout(timeoutId)
  }, [])

  useEffect(() => {
    responseIndex.current = 0
    if (response) {
      clearLoadInterval()
      loadInterval.current = setInterval(() => {
        const index = responseIndex.current
        if (index < response.length) {
          setText((curr) => curr.concat(response.charAt(index)))
          responseIndex.current = index + 1
        } else {
          clearInterval(loadInterval.current)
        }
      }, 20)
    }
  }, [response])

  useEffect(() => {
    loadInterval.current = setInterval(() => {
      setText((curr) => (curr === '...' ? '' : curr.concat('.')))
    }, 300)
    return () => {
      clearLoadInterval()
    }
  }, [])

  useEffect(() => {
    messageRef.current.scrollIntoView(false)
  }, [text])

  return (
    <>
      <div className="profile">
        <img
          src={botIcon}
          alt="bot"
        />
      </div>
      <div className="message" ref={messageRef}>
        {text}
      </div>
    </>
  )
}

export default ChatBot
