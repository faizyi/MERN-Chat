import { createUser, findByEmail } from "../services/user.service.js";
import { comparePassword, hashPassword } from "../utils/hash.password.js";
import jwtToken from "../utils/jwt.js";

const signup = async (req,res)=>{
    const {username, email, password} = req.body;
    try {
        const user = await findByEmail(email);
        if(user) return res.status(400).json({message: 'User already exists'});
        const hash = await hashPassword(password);
        const payload = {username , email , password : hash};
        const newUser = await createUser(payload);
        if(!newUser) return res.status(500).json({message : "Something went wrong"});
        const token = await jwtToken(newUser);
        res.status(201).json({token , userId : newUser._id});
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
        const token = await jwtToken(user);
        res.status(201).json({token , userId : user._id});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export {
    signup,
    login
}