import express from "express";
import {createServer} from "http"
import { Server } from "socket.io";

const app = express();
const server = createServer(app);
const io = new Server(server,{
    cors :{
        origin: "http://localhost:5173",
        methods : ["GET", "POST"]
    }
});

let users = [];

io.on("connection", (socket)=>{
    console.log("a user connected");

    socket.on("signup", (userId)=>{
        const user = {userId, socketId : socket.id};
        users.push(user);
        // console.log(users);
    })
    socket.on("send_message", (messageData)=>{
        // console.log(messageData);
        const receiver = users.find((user)=> user.userId === messageData.receiverId);
        const sender = users.find((user)=> user.userId === messageData.senderId);
        if(receiver){
            io.to(receiver.socketId).to(sender.socketId).emit("receive_message", {
            messageData
        });
    }
    })

    socket.on("disconnect", ()=>{
        console.log('user disconnected');
        users = users.filter((user) => user.socketId !== socket.id);
    })
})

export {
    app,
    server,
    io,
    users
}