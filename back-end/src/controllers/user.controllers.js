import { createUser, findByEmail, getUsers, imageUpload,} from "../services/user.service.js";
import { comparePassword, hashPassword } from "../utils/hash.password.js";
import { validationResult } from "express-validator";
import jwtToken from "../utils/jwt.js";

const signup = async (req,res)=>{
    try {
        const result = validationResult(req);
        if(!result.isEmpty()) return res.status(400).json({ errors: result.array() });
        const {fullName, email, password} = req.body;
        const userName = fullName.toUpperCase()
        const user = await findByEmail(email);
        if(user) return res.status(400).json({message: 'Signup failed'});
        const hash = await hashPassword(password);
        const newUser = await createUser({ fullName : userName, email, password: hash });
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
        fullName : user.fullName, email : user.email, image: user.image, message: "You have successfully signed up!"});
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

const uploadImage = async (req, res)=>{
    try {
        const { id, imageBase64 } = req.body;
        if (!id || !imageBase64) {
            return res.status(400).json({ message: 'User ID and image data are required' });
        }
        const updatedUser = await imageUpload(id, imageBase64)
        if (!updatedUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({ message: 'Image uploaded successfully', 
        userId: updatedUser._id, fullName: updatedUser.fullName, email: updatedUser.email, 
        image: updatedUser.image});
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error uploading image', error });
    }
}

export {
    signup,
    login,
    getAllUsers,
    uploadImage
}