import io from "socket.io-client"

const socket = io("http://localhost:5825/",{
    withCredentials: true,
    transports: ["polling"], 
});
export default socket;