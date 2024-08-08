import mongoose from "mongoose";

const chatSchema = new mongoose.Schema({
    senderId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        required : true
    },
    receiverId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        required : true
    },
    message : {
        type : String,
        required : true
    },
    timeStamp : {
        type : Date,
        default : Date.now
    }
})

const ChatModel = mongoose.model("Chat", chatSchema);
export default ChatModel