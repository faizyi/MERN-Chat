import { createChat, getMessagesById } from "../services/chat.service.js";
import { io, users } from "../socket/socket.js";
const sendMessage = async (req, res)=>{
    const {senderId, receiverId, message} = req.body;
    try {
        const payload = {senderId, receiverId, message};
        console.log(payload);
        const chat = await createChat(payload);
        // const recieverSocketId = users[receiverId];
        // if(recieverSocketId) io.to(receiverId).emit("message", chat);
        // // const senderSocketId = users[senderId];
        // // if(senderSocketId) io.to(senderId).emit("message", chat)
        res.status(201).json({message : chat})
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getMessages = async (req, res)=>{
    const {userId, friendId} = req.params;
    try {
        const ids = {userId, friendId}
        const messages = await getMessagesById(ids);
        res.status(201).json({message : messages})
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


export {
    sendMessage,
    getMessages
}