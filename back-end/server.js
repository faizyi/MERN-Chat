import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import cors from "cors";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import config from "./src/config/server.config.js";
import connectDB from "./src/db/db.js";
import userRoutes from "./src/routes/user.routes.js";
import chatRoutes from "./src/routes/chat.routes.js";
// import { server} from "./src/socket/socket.js";
// import { corsOption, whiteList } from "./src/config/cors.config.js";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: "https://mern-chat-gamma.vercel.app",
    methods: ["GET", "POST"],
    credentials: true,
}));

const dbConnect = async (params) => {
    try {
        await connectDB();
    } catch (error) {
        console.log(error);
        
    }
}

dbConnect()
    // .then(res => console.log("Connected"))
    // .catch(err => console.log("DB NOT Connected"))


app.get("/", (req, res) => {
    res.send("hello world");
});
app.use("/api/users", userRoutes);
app.use("/api/chats", chatRoutes);


// Create HTTP server and Socket.IO server
const server = createServer(app);
const io = new Server(server, {
    cors: {
        origin: "https://mern-chat-gamma.vercel.app",
        methods: ["GET", "POST"],
        credentials: true,
    },
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

server.listen(config.appPort, () => {
    console.log(`Server running on port ${config.appPort}`);
});