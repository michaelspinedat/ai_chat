import React from 'react'
import './index.css'
import ChatUser from './User'
import ChatBot from './Bot'

function ChatStripe ({ isAi, text }) {
  return (
    <div className={`wrapper ${isAi && 'ai'}`}>
      <div className="chat">
        {isAi ? <ChatBot prompt={text} /> : <ChatUser text={text} />}
      </div>
    </div>
  )
}

export default ChatStripe
