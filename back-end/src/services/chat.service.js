import ChatModel from "../models/chat.model.js"

const createChat = async (payload)=>{
    try {
        const chat = new ChatModel({...payload});
        const result = chat.save();
        return result
    } catch (error) {
        throw new Error(error)
    }
}

const getMessagesById = async (ids)=>{
    try {
        const messages = await ChatModel.find({
            $or : [
                {senderId : ids.userId , receiverId : ids.friendId},
                {senderId : ids.friendId, receiverId : ids.userId}
            ]
        });
        return messages
    } catch (error) {
        throw new Error(error)
    }
}

export{
    createChat,
    getMessagesById
}