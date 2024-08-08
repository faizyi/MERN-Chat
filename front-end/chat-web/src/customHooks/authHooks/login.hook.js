import { useNavigate } from "react-router-dom";
import { login } from "../../services/auth.services";
export default function loginHook() {
    const navigate = useNavigate();
    const onFinish = async (values) => {
        try {
            const result = await login(values, navigate);
            console.log(result);
        } catch (error) {
            console.log(error);
        }
    };
  return {
    onFinish
  }
}
