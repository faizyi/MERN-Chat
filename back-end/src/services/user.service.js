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
        throw new Error(error);
    }
}

export {
    findByEmail,
    createUser
}