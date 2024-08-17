import {Router} from "express";
import { getAllUsers, login, signup } from "../controllers/user.controllers.js";
import protectRoute from "../middleware/protectRoute.js";

const router = Router();

router.post("/signup", signup)
router.post("/login", login)
router.get("/all-users", protectRoute, getAllUsers)

export default router;
