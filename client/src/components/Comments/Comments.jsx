import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import io from 'socket.io-client'

const Comments = (product) => {
  const user = useSelector((state) => state?.authUser)
  const [messages, setMessages] = useState([])
  const [newMessage, setNewMessage] = useState({
    message: messages,
    recipientId: product.props.owner,
    senderId: user.userById._id,
    targetItemid: product.props._id
  })

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
    const socket = io('http://localhost:8001')
    socket.emit('message', newMessage)
    setNewMessage({
      message: '',
      recipientId: product.props.owner,
      senderId: user.userById._id,
      targetItemid: product.props._id
    })
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
          value={newMessage.message}
          onChange={(e) =>
            setNewMessage({ ...newMessage, message: e.target.value })}
        />
        <button type='submit'>Enviar</button>
      </form>
    </div>
  )
}

export default Comments
