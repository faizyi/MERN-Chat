import { axiosHandler } from "../axios/axios"
// import { bufferToBase64 } from "../utils/bufferToBase64";

export const uploadImage = async (formData)=>{
    try {
        const response = await axiosHandler.post("/api/users/upload-image", formData);
        const user = response.data;
        localStorage.setItem('userData', JSON.stringify(user));
        console.log(response);
    } catch (error) {
        console.log(error);
        
    }
}