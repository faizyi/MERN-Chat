import { useNavigate } from "react-router-dom";
import { signup } from "../../services/auth.services";
export default function signupHook() {
    const navigate = useNavigate()
    const onFinish = async (values) => {
        try {
            const result = await signup(values, navigate);
            localStorage.setItem('token', result.data.token);
            localStorage.setItem('userId', result.data.userId);
            console.log(result);
        } catch (error) {
            console.log(error);
        }
    };
  return {
    onFinish
  }
}
