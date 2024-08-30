import { createServer } from "http";
import { Server } from "socket.io";
import express from "express";
import { whiteList } from "../config/cors.config.js";
const app = express();
const server = createServer(app);
const io = new Server(server, {
    cors: {
        origin: whiteList,
        methods: ["GET", "POST"],
        credentials: true,
    },
    transports: ['websocket', 'polling'], 
});

let users = [];

io.on("connection", (socket) => {
    console.log("a user connected");

    socket.on("signup", (userId) => {
        const user = { userId, socketId: socket.id };
        users.push(user);
    });

    socket.on("send_message", (messageData) => {
        const receiver = users.find((user) => user.userId === messageData.receiverId);
        const sender = users.find((user) => user.userId === messageData.senderId);
        
        if (receiver) {
            io.to(receiver.socketId).emit("receive_message", { messageData });
        }
        
        if (sender) {
            io.to(sender.socketId).emit("receive_message", { messageData });
        }
    });

    socket.on("disconnect", () => {
        console.log('user disconnected');
        users = users.filter((user) => user.socketId !== socket.id);
    });
});

export { server, io, app, users };