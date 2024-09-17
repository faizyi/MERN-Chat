import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMessage } from "../../services/chat.service";
import socket from "../../socket/socket";
import { useSelector, useDispatch } from "react-redux";
import { showLoader, hideLoader } from "../../redux/loaderRedux/loaderSlice";
export default function messagesHook() {
  const isLoading = useSelector(state => state.loader.isLoader);
  const dispatch = useDispatch();
  const sender = JSON.parse(localStorage.getItem("userData")) || null;
  const senderId = sender ? sender.userId : "";
  const { friendId } = useParams();
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
    dispatch(showLoader());
    const fetchMessages = async () => {
      try {
        const response = await getMessage(senderId, friendId);
        dispatch(hideLoader());
        setMessages(response.data.message);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMessages();
  }, [senderId, friendId]);

  return { messages, isLoading};
}
