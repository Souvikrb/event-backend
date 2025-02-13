import { useNavigate } from "react-router-dom";


const useAuth = () => {
    const navigate = useNavigate();
    const logout = () => {
        sessionStorage.removeItem('loginToken');
        navigate('/login');

    }
    return { logout };
}

export default useAuth;