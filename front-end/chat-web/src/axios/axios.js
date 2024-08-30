import axios from "axios";
const url = "https://chat-backend-tau-two.vercel.app/"
export const axiosHandler = axios.create({
    baseURL : "http://localhost:7777/",
    headers : {"Content-Type" : "application/json"},
    withCredentials : true
})

axiosHandler.interceptors.request.use(
    (config)=>{
        return (config);
    },
    (error)=>{
        return Promise.reject(error)
    }
)
axiosHandler.interceptors.response.use(
    (response)=>{
        return (response);
    },
    (error)=>{
        return Promise.reject(error)
    }
)