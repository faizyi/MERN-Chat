import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import config from "./src/config/server.config.js";
import userRoutes from "./src/routes/user.routes.js";
import chatRoutes from "./src/routes/chat.routes.js";
import connectToDB from "./src/db/db.js";
import cookieParser from "cookie-parser";
import { corsOption } from "./src/config/cors.config.js";
// import {  server, app  } from "./src/socket/socket.js";
const app = express();

//Connect DB
connectToDB()

//middleware
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.json());
app.use(cors(corsOption));

//routes
app.get("/", (req, res) => {
    res.send("hello server");
});
app.use("/api/users", userRoutes);
app.use("/api/chats", chatRoutes);

app.listen(config.appPort, () => {
    console.log(`Server running on port ${config.appPort}`);
});

// export default app;