import io from "socket.io-client"

const socket = io("https://socket-io-server-nu.vercel.app/",{
    withCredentials: true,
    transports: ["polling"], 
});
export default socket;