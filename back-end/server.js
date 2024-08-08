import express from "express";
import cors from "cors";
// import bodyParser from "body-parser";
import config from "./src/config/server.config.js";
import connectDB from "./src/db/db.js";
import userRoutes from "./src/routes/user.routes.js"
import chatRoutes from "./src/routes/chat.routes.js"
import { app, server } from "./src/socket/socket.js";
const PORT = config.appPort



app.use(express.json());
app.use(cors());
// app.use(bodyParser.json());

await connectDB();

app.use("/api/users", userRoutes)
app.use("/api/chats", chatRoutes)

server.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})
