import { useNavigate } from "react-router-dom";
import { login } from "../../services/auth.services";
import { useState } from "react";
export default function loginHook() {
  const [userData, setUserData] = useState("");
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
          console.log(result);
        } catch (error) {
            console.log(error);
        }
    };
  return {
    handleLogin
  }
}
