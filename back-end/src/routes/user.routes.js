import {Router} from "express";
import { getAllUsers, login, searchUsers, signup } from "../controllers/user.controllers.js";
import protectRoute from "../middleware/protectRoute.js";
import { signupRouteValidator } from "../validators/request.valid.js";

const router = Router();

router.post("/signup", signupRouteValidator, signup)
router.post("/login", login)
router.get("/all-users", protectRoute,  getAllUsers)
router.get("/search/:query",  searchUsers)

export default router;
