import React from "react";
import MessageInput from "./message.input";
import messagesHook from "../../../src/customHooks/chatHooks/messages.hook"
export default function MessagesContainer() {
  const {messages} = messagesHook();
  // console.log(messages);
  // useMessages();
  // const { messages } = useMessages();
  // console.log(messages);

  return (
    <div className="flex-1 overflow-y-auto p-4">
      {messages.map((msg, index) => (
        <div key={index} className="mb-2 p-2 bg-gray-200 rounded">
          <strong>{msg.senderId === localStorage.getItem("userId") ? "You" : "Friend"}: </strong>
          {msg.message}
        </div>
      ))}
      <MessageInput/>
    </div>
  );
}
