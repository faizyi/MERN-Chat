import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMessage } from "../../services/chat.service";
import socket from "../../socket/socket";
import senderIdHook from "./senderId.hook";
export default function messagesHook() {
  const { friendId } = useParams();
  const {senderId} = senderIdHook();
  const [messages, setMessages] = useState({});
  useEffect(() => {
    socket.emit("signup", senderId);

    socket.on("receive_message", (newMessage) => {      
      setMessages((prevMessages) => [
        ...prevMessages,
        newMessage.messageData
      ]);
    });
  }, [senderId]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await getMessage(senderId, friendId);
        console.log(response.data.message);
        setMessages(response.data.message); // Ensure messages is an array
      } catch (error) {
        console.log(error);
      }
    };
    fetchMessages();
  }, [senderId, friendId]);

  return { messages};
}
