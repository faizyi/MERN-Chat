import jwt from "jsonwebtoken";
import userModel from "../models/user.model.js";
import config from "../config/server.config.js";

const protectRoute = async (req, res, next) => {
    try {
        const token = req.cookies.jwt;
        console.log(token);
        if (!token) return res.status(401).json({ message: "Not authorized" });
        const decoded = jwt.verify(token, config.jwtKey);
        if (!decoded) return res.status(401).json({ message: "Invalid token" });
        const user = await userModel.findById(decoded.id).select("-password")
        if (!user) return res.status(400).json({ message: "User not found" });
        req.user = user;
        next();
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
}

export default protectRoute;