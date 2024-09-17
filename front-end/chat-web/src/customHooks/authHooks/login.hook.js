import { notification } from 'antd';
import { useNavigate } from "react-router-dom";
import { login } from "../../services/auth.services";
import { useState } from "react";
import { showLoader, hideLoader } from '../../redux/loaderRedux/loaderSlice';
import { useSelector, useDispatch } from 'react-redux';
export default function loginHook() {
  const isLoading = useSelector(state => state.loader.isLoader);
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({});
    const navigate = useNavigate();
    const handleLogin = async (event) => {
      event.preventDefault();
      try {
        const user = new FormData(event.currentTarget);
        const data = {
          email : user.get("email"),
          password : user.get("password")
        }
        if (!data.email || !data.password) {
          notification.error({
            message: "Email and password are required.",
            duration: 2,
          });
          return;  // Stop if validation fails
        }
        dispatch(showLoader());
          const result = await login(data, navigate);
          dispatch(hideLoader());
          if(result.status == 201){
            notification.success({
              message: result.data.message,
              duration: 2
            })
          }
          else{
            notification.error({
              message: result.response.data.message,
              duration: 2
            })
          }
        } catch (error) {
            console.log(error);
        } finally {
          dispatch(hideLoader());
        }
    };
  return {
    handleLogin,
    isLoading
  }
}
