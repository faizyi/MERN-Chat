import io from "socket.io-client"

const socket = io("https://chat-socketio-production-0004.up.railway.app/",{
    withCredentials: true,
    transports: ["polling"], 
});
export default socket;