import userModel from "../models/user.model.js";

const findByEmail = async (email)=>{
    try {
        const user = await userModel.findOne({email : email});
        return user
    } catch (error) {
        throw error
    }
}

const createUser = async (payload)=>{
    try {
        const user = new userModel({...payload});
        const result = await user.save();
        return result
    } catch (error) {
         throw error
    }
}


const getUsers = async (loggedInUserId)=>{
    try {
        const allUser =  await userModel.find({_id : {$ne : loggedInUserId}}).select("-password");
        return allUser
    } catch (error) {
         throw error
    }
}

const searchUser = async(name)=>{
    try {
        const search = await userModel.find({fullName: new RegExp(name, "i")})
        return search
    } catch (error) {
         throw error 
    }
}

export {
    findByEmail,
    createUser,
    getUsers,
    searchUser,
}