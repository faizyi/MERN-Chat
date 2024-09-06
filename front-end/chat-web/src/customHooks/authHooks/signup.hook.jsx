import { notification } from 'antd';
import { useNavigate } from "react-router-dom";
import { signup } from "../../services/auth.services";
import { useState } from 'react';
export default function signupHook() {
    const [errors, setErrors] = useState({});
    const navigate = useNavigate()
    const handleSignup = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const signupData = {
            fullName: data.get('fullName'),
            email: data.get('email'),
            password: data.get('password'),
        };
        try {
            const result = await signup(signupData, navigate, notification);
            if (Array.isArray(result)) {
                const formattedErrors = {};
                result.forEach((error)=>{
                    formattedErrors[error.path] = error.msg; 
                })
                setErrors(formattedErrors);
            }
        } catch (error) {
            console.error("Signup failed:", error);
        }
    };
    return {
        handleSignup,
        errors
    }
}
