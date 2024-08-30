import { axiosHandler } from "../axios/axios"

export const signup = async (data,navigate)=>{
    try {
        const response = await axiosHandler.post("/api/users/signup", data);
        localStorage.setItem('userData', JSON.stringify(response.data));
        localStorage.setItem('userId', response.data.userId);
        navigate("/login")
        return response
    } catch (error) {
        return error
    }
}
export const login = async (data,navigate)=>{
    try {
        const response = await axiosHandler.post("/api/users/login", data);
        localStorage.setItem('userData', JSON.stringify(response.data));
        localStorage.setItem('userId', response.data.userId);
        navigate("/chat-home")
        return response
    } catch (error) {
        return error
    }
}

export const allUsers = async ()=>{
    try {
        const response = await axiosHandler.get("/api/users/all-users");
        return response
    } catch (error) {
        return error
    }
}