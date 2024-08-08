import { useEffect, useState } from "react";
import io from "socket.io-client";
import { getMessage } from "../../services/chat.service";
import { useParams } from "react-router-dom";

const socket = io("http://localhost:7777");

export default function messagesHook() {
  const { friendId } = useParams();
  const userId = localStorage.getItem("userId");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.emit("signup", userId);

    const fetchMessages = async () => {
      try {
        const response = await getMessage(userId, friendId);
        console.log(response);
        setMessages(response.data.message); // Ensure messages is an array
      } catch (error) {
        console.log(error);
      }
    };
    fetchMessages();
  }, [userId, friendId]);

  useEffect(() => {
    socket.on("message", (newMessage) => {
      // console.log(newMessage);
      setMessages((prevMessages) => [...prevMessages, newMessage]);
    });

    return () => {
      socket.off("message");
    };
  }, []);

  return { messages };
}
