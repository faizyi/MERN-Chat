import { notification } from 'antd';
import { useNavigate } from "react-router-dom";
import { signup } from "../../services/auth.services";
import { useState } from 'react';
import { showLoader, hideLoader } from '../../redux/loaderRedux/loaderSlice';
import { useSelector, useDispatch } from 'react-redux';
export default function signupHook() {
    const isLoading = useSelector(state => state.loader.isLoader);
    const dispatch = useDispatch();
    const [errors, setErrors] = useState({});
    const navigate = useNavigate()
    const handleSignup = async (event) => {
        event.preventDefault();
        const user = new FormData(event.currentTarget);
        const data = {
            fullName: user.get('fullName'),
            email: user.get('email'),
            password: user.get('password'),
        };
        if (!data.fullName || !data.email || !data.password) {
            notification.error({
              message: "All fields are required",
              duration: 2,
            });
            return;  // Stop if validation fails
        }
        dispatch(showLoader());
        try {
            const result = await signup(data, navigate, notification);
            if(result.status == 201){
                notification.success({message: result.data.message, duration: 2,})
            } else{
                notification.error({message: result, duration: 2,})
            }
            // console.log(result);
            dispatch(hideLoader());
            if (Array.isArray(result)) {
                const formattedErrors = {};
                result.forEach((error)=>{
                    formattedErrors[error.path] = error.msg; 
                })
                setErrors(formattedErrors);
                return 
            }
        } catch (error) {
            notification.error({ message: "Signup failed", description: error.message });
        } finally{
            dispatch(hideLoader()); 
        }
    };
    return {
        handleSignup,
        errors,
        isLoading
    }
}
