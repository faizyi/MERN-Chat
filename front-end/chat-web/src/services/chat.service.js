import { axiosHandler } from "../axios/axios"

export const sendMessage = async (newMessage)=>{
    try {
        const response = await axiosHandler.post("/api/chats/", newMessage);
        return response
    } catch (error) {
        console.log(error);
    }
}

export const getMessage = async (userId,friendId)=>{
    try {
        const response = await axiosHandler.get(`/api/chats/${userId}/${friendId}`);
        // console.log(response);
        return response
    } catch (error) {
        console.log(error);
    }
}