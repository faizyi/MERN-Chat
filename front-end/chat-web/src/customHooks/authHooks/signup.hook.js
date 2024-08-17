import { useNavigate } from "react-router-dom";
import { signup } from "../../services/auth.services";
export default function signupHook() {
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
            const result = await signup(signupData, navigate);
            console.log(result);
        } catch (error) {
            console.log(error);
        }
    };
  return {
    handleSignup
  }
}
