import jwt from "jsonwebtoken"
import config from "../config/server.config.js"

const jwtToken = async (user) =>{
    const token = jwt.sign({id : user._id}, config.jwtKey , {expiresIn : "1h"});
    return token
}

export default jwtToken;