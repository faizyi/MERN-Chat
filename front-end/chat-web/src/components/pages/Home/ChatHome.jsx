import React from 'react'
import MessagesContainer from '../../message/messages.container'
// import MessageInput from '../../message/message.input'

export default function ChatHome() {
  return (
    <div className="flex flex-col h-screen">
        <MessagesContainer/>
        {/* <MessageInput/> */}
    </div>
  )
}
