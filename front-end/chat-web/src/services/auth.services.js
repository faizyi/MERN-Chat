import { axiosHandler } from "../axios/axios"

export const signup = async (data,navigate)=>{
    try {
        const response = await axiosHandler.post("/api/users/signup", data);
        navigate("/login")
        return response
    } catch (error) {
        return error
    }
}
export const login = async (data,navigate)=>{
    try {
        const response = await axiosHandler.post("/api/users/login", data);
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('userId', response.data.userId);
        navigate("/chat")
        return response
    } catch (error) {
        return error
    }
}