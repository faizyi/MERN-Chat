import {Router} from "express";
import { getAllUsers, login, signup, uploadImage } from "../controllers/user.controllers.js";
import protectRoute from "../middleware/protectRoute.js";
import { signupRouteValidator } from "../validators/request.valid.js";
const router = Router();

router.post("/signup", signupRouteValidator, signup)
router.post("/login", login)
router.get("/all-users", protectRoute,  getAllUsers)
router.post("/upload-image",uploadImage)

export default router;
