import io from "socket.io-client"

const socket = io("https://chat-backend-tau-two.vercel.app",{
    withCredentials: true,
    transports: ["websocket", "polling"], 
});
export default socket;