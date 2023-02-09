import React from 'react'
import './index.css'
import sendIcon from '../../assets/send.svg'

const ENTER = 'Enter'

function Form({ value, onChange, onSubmit }) {
  const handleChange = (e) => {
    const { value: newValue } = e.target
    onChange(newValue)
  }

  const handleEnter = (e) => {
    if (e.code === ENTER && e.shiftKey && value) {
      onSubmit(value)
      e.preventDefault()
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(e.target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={value}
        onChange={handleChange}
        cols="1"
        rows="1"
        placeholder="Ask codex"
        onKeyDown={handleEnter}
        required
      />
      <button type="submit">
        <img src={sendIcon} alt="send" />
      </button>
    </form>
  )
}

export default Form
