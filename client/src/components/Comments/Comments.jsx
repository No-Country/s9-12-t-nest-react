import React, { useState, useEffect } from 'react'
import io from 'socket.io-client'

const Comments = () => {
  const [messages, setMessages] = useState([])
  const [newMessage, setNewMessage] = useState('')

  useEffect(() => {
    const socket = io('http://localhost:8001')

    socket.on('message', (message) => {
      setMessages((prevMessages) => [...prevMessages, message])
    })

    return () => {
      socket.disconnect()
    }
  }, [])

  const handleSendMessage = (e) => {
    e.preventDefault()
    // Aquí puedes implementar la lógica para identificar si el usuario es dueño del producto o un visitante
    // Por ejemplo, puedes agregar un campo para que el usuario ingrese su rol antes de enviar el mensaje

    // Envía el mensaje al servidor
    const socket = io('http://localhost:8001')
    socket.emit('message', newMessage)
    setNewMessage('')
  }

  return (
    <div>
      <h1>Chat de Comentarios</h1>
      <div>
        {messages.map((message, index) => (
          <div key={index}>{message}</div>
        ))}
      </div>
      <form onSubmit={handleSendMessage}>
        <input
          type='text'
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button type='submit'>Enviar</button>
      </form>
    </div>
  )
}

export default Comments
