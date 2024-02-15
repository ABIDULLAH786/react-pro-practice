import { useEffect, useState } from 'react';
import { selectIsUserLogin } from '../../redux/slice/auth';
import { useDispatch, useSelector } from 'react-redux';
import LoginFrom from './LoginForm/LoginFrom';
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    const [formData, setFormData] = useState({
        email:"",
        password:""
    });
    function handleSignin() {
        localStorage.setItem("role", "admin")
        navigate("/admin/chats")
        // dispatch(loginUserAsync({ email, password }))
    }

    const isLogin = useSelector(selectIsUserLogin)

    useEffect(() => {
        if (isLogin) {
            navigate("/admin/chats")
        }
    }, [isLogin])

    return (
        <div >
            <LoginFrom setFormData={setFormData} formData={formData} handleSignin={handleSignin}/>
        </div>
    )


}

export default Login;