import io from "socket.io-client"

const socket = io("http://localhost:7777/",{
    withCredentials: true,
    transports: ["polling"], 
});
export default socket;