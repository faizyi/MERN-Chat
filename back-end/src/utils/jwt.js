import jwt from "jsonwebtoken"
import config from "../config/server.config.js"

const jwtToken = async (user, res) =>{
    const token = jwt.sign({id : user._id}, config.jwtKey , {expiresIn : "1h"});
    res.cookie("jwt", token,{
        maxAge: 15 * 24 * 60 * 60 * 1000,
		httpOnly: true,
		sameSite: "strict",
        secure : config.cookieKey === "production"
    })
    return token
}

export default jwtToken;