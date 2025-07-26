import { useState } from 'react'
import './Chatbot.css'

const Chatbot = () => {
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')
  const [isOpen, setIsOpen] = useState(false)

const sendMessage = async () => {
  if (!input) return

  const userMsg = { sender: 'user', text: input }
  setMessages(prev => [...prev, userMsg])
  setInput('')

  const res = await fetch('http://localhost:3000/api/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message: input })
  })

  const data = await res.json()
  const botMsg = { sender: 'bot', text: data.reply }
  setMessages(prev => [...prev, botMsg]) // <- Only this once
}


  return (
    <>
      {!isOpen && (
        <div className="chatbot-hint">
          <span className="typing">Want to see some of my work?</span>
        </div>
      )}
      <button className="chat-toggle" onClick={() => setIsOpen(!isOpen)}>
        💬
      </button>

      <button className="chat-toggle" onClick={() => setIsOpen(!isOpen)}>
        💬
      </button>

      {isOpen && (
        <div className="chatbot">
          <div className="chatbot-messages">
            {messages.map((msg, i) => (
              <div key={i} className={`msg ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
          </div>
          <div className="chatbot-input">
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && sendMessage()}
              placeholder="Ask me about my work!"
            />
            <button onClick={sendMessage}>Send</button>
          </div>
        </div>
      )}
    </>
  )
}

export default Chatbot
