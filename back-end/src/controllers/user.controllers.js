import { createUser, findByEmail, getUsers } from "../services/user.service.js";
import { comparePassword, hashPassword } from "../utils/hash.password.js";
import jwtToken from "../utils/jwt.js";

const signup = async (req,res)=>{
    const {fullName, email, password} = req.body;
    try {
        const user = await findByEmail(email);
        if(user) return res.status(400).json({message: 'User already exists'});
        const hash = await hashPassword(password);
        const newUser = await createUser({ fullName, email, password: hash });
        if(!newUser) return res.status(500).json({message : "Something went wrong"});
        const token = await jwtToken(newUser, res);
        res.status(201).json({token , userId : newUser._id,});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const login = async (req, res)=>{
    const {email, password} = req.body;
    try {
        const user = await findByEmail(email);
        const isMatch = await comparePassword(password, user?.password || "");
        if(!user || !isMatch) return res.status(400).json({message : "Invalid credentials"})
        const token = await jwtToken(user, res);
        res.status(201).json({token , userId : user._id, fullName : user.fullName, email : user.email});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getAllUsers = async (req, res)=>{
    try {
        const loggedInUserId = req.user._id;
        const filteredUsers = await getUsers(loggedInUserId);
        res.status(201).json({users : filteredUsers});
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
}

export {
    signup,
    login,
    getAllUsers
}