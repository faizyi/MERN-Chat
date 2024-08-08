import {Router} from "express";
import { getMessages, sendMessage } from "../controllers/chat.controllers.js";
const router = Router();


router.post("/", sendMessage)
router.get("/:userId/:friendId", getMessages)
export default router;