import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
// import bodyParser from "body-parser";
import config from "./src/config/server.config.js";
import connectDB from "./src/db/db.js";
import userRoutes from "./src/routes/user.routes.js"
import chatRoutes from "./src/routes/chat.routes.js"
import { app, server } from "./src/socket/socket.js";
const PORT = config.appPort

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin : "https://mern-chat-gamma.vercel.app/",
    credentials : true
}));
// app.use(bodyParser.json());

await connectDB();

app.use("/api/users", userRoutes)
app.use("/api/chats", chatRoutes)

server.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})
