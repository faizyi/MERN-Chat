import { axiosHandler } from "../axios/axios"

export const searchUsers = async (value)=>{
    try {
        const response = await axiosHandler.get(`/api/users/search/${value}`)
        console.log(response);
        
    } catch (error) {
        console.log(error);
        
    }
}