import React from 'react'
import userIcon from '../../assets/user.svg'
import './index.css'

function ChatUser ({ text }) {
  return (
    <>
      <div className="profile">
        <img
          src={userIcon}
          alt="user"
        />
      </div>
      <div className="message">{text}</div>
    </>
  )
}

export default ChatUser
