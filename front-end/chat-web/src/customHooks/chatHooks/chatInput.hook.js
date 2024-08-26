import { useState } from "react";
import { useParams } from "react-router-dom";
import { sendMessage as sendMessageToServer } from "../../services/chat.service";
import socket from "../../socket/socket";
export default function chatInputHook() {
   const sender = JSON.parse(localStorage.getItem("userData")) || null;
  const senderId = sender ? sender.userId : "";
  const { friendId } = useParams();
  const [newMessage, setNewMessage] = useState("");
  const handleSend = async () => {
    if (newMessage.trim()) {  
      const msg = newMessage;
      const messageData = { senderId: senderId, receiverId: friendId, message: msg };
      socket.emit("send_message", messageData);
      try {
        await sendMessageToServer(messageData);
        setNewMessage("");
      } catch (error) {
        console.log(error);
      }
    }
  };

  return {
    newMessage,
    setNewMessage,
    handleSend,
  };
}
