import { useState } from "react";
import { useParams } from "react-router-dom";
import { sendMessage as sendMessageToServer } from "../../services/chat.service";
import socket from "../../socket/socket";
import senderIdHook from "./senderId.hook";
export default function chatInputHook() {
  const {senderId} = senderIdHook();
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
