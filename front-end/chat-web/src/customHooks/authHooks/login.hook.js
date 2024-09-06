import { notification } from 'antd';
import { useNavigate } from "react-router-dom";
import { login } from "../../services/auth.services";
import { useState } from "react";
export default function loginHook() {
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
          const result = await login(data, navigate);
          if(result.response.status == 201){
            notification.success({
              message: result.response.data.message,
              duration: 2
            })
          }else{
            notification.error({
              message: result.response.data.message,
              duration: 2
            })
          }
        } catch (error) {
            console.log(error);
        }
    };
  return {
    handleLogin
  }
}
