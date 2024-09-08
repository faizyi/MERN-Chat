import { createUser, findByEmail, getUsers, searchUser } from "../services/user.service.js";
import { comparePassword, hashPassword } from "../utils/hash.password.js";
import { validationResult } from "express-validator";
import jwtToken from "../utils/jwt.js";

const signup = async (req,res)=>{
    try {
        const result = validationResult(req);
        if(!result.isEmpty()) return res.status(400).json({ errors: result.array() });
        const {fullName, email, password} = req.body;
        const user = await findByEmail(email);
        if(user) return res.status(400).json({message: 'Signup failed'});
        const hash = await hashPassword(password);
        const newUser = await createUser({ fullName, email, password: hash });
        if(!newUser) return res.status(500).json({message : "Something went wrong"});
        const token = await jwtToken(newUser, res);
        res.status(201).json({token , userId : newUser._id, message: "You have successfully signed up!"});
    } catch (error) {
        res.status(500).json({ message: error.message,});
    }
}

const login = async (req, res)=>{
    const {email, password} = req.body;
    try {
        const user = await findByEmail(email);
        const isMatch = await comparePassword(password, user?.password || "");
        if(!user || !isMatch) return res.status(400).json({message : "Invalid credentials"})
        const token = await jwtToken(user, res);
        res.status(201).json({token , message: "success",  userId : user._id, 
        fullName : user.fullName, email : user.email, message: "You have successfully signed up!"});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getAllUsers = async (req, res)=>{
    try {
        const loggedInUserId = req.user._id;
        console.log("id", loggedInUserId);
        
        const filteredUsers = await getUsers(loggedInUserId);
        res.status(201).json({users : filteredUsers});
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
}

const searchUsers = async (req, res)=>{
    try {
        const userName = req.params.query;
        const users = await searchUser(userName);
        res.status(201).json({ users });
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
}

export {
    signup,
    login,
    getAllUsers,
    searchUsers
}