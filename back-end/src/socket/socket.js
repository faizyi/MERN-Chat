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

let users = {};

io.on("connection", (socket)=>{
    console.log("a user connected");

    socket.on("signup", (userId)=>{
        users[userId] = socket.id
        console.log(userId , socket.id);
        console.log(`User ${userId} connected with socket ID ${socket.id}`);
    })
    socket.on("message", (msg) => {
        // const { senderId, receiverId, message } = msg;
        // console.log(`Message from ${senderId} to ${receiverId}: ${message}`);

        // if (users[receiverId]) {
        //   io.to(users[receiverId]).emit("message", msg);
        // }
        // io.to(socket.id).emit("message", msg); // Send back to sender as well
        io.emit("message" , msg)
      })

    socket.on("disconnect", ()=>{
        console.log('user disconnected');
        for (const [userId, socketId] of Object.entries(users)) {
            if (socketId === socket.id) {
              delete users[userId];
              console.log(`User ${userId} disconnected`);
              break;
            }
          }
    })
})

export {
    app,
    server,
    io,
    users
}