import bcrypt from "bcrypt"
const saltRounds = 10;

const hashPassword = async (planeText)=>{
    const salt = await bcrypt.genSalt(saltRounds);
    const hash = await bcrypt.hash(planeText , salt);
    return hash;
}

const comparePassword = async (planeText , hashedText)=>{
    const compare = await bcrypt.compare(planeText , hashedText);
    return compare;
}

export {
    hashPassword,
    comparePassword
}