import { useState } from "react";
import { useParams } from "react-router-dom";
import { sendMessage as sendMessageToServer } from "../../services/chat.service";
import io from "socket.io-client";

const socket = io("http://localhost:7777");

export default function chatInputHook() {
  const { friendId } = useParams();
  const [newMessage, setNewMessage] = useState("");
  const userId = localStorage.getItem("userId");

  const sendInputMessage = (message) => {
    const msg = { senderId: userId, receiverId: friendId, message };
    socket.emit("message", msg);
  };

  const handleSend = async () => {
    if (newMessage.trim()) {
      const msg = newMessage;
      sendInputMessage(msg);
      setNewMessage(""); // Clear the input field

      const newMessageObj = { senderId: userId, receiverId: friendId, message: msg };
      try {
        await sendMessageToServer(newMessageObj);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return {
    newMessage,
    setNewMessage,
    handleSend
  };
}
