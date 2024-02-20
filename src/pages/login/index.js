import { useEffect, useState } from 'react';
import { loginUserAsync, selectIsUserLogin } from '../../redux/slice/auth';
import { useDispatch, useSelector } from 'react-redux';
import LoginFrom from './LoginForm/LoginFrom';
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });
    const [isError, setIsError] = useState('')
    function handleSignin() {
        if (formData.email?.length < 1 || formData.password?.length < 1) {
            setIsError("Provide email and password first")
            return
        }
        localStorage.setItem("role", "admin")
        navigate("/admin/chats")
        dispatch(loginUserAsync({ ...formData }))
    }

    const isLogin = useSelector(selectIsUserLogin)

    useEffect(() => {
        if (isLogin) {
            navigate("/admin/chats")
        }
    }, [isLogin])

    return (
        <div >
            <LoginFrom setFormData={setFormData} formData={formData} handleSignin={handleSignin} isError={isError} setIsError={setIsError}/>
        </div>
    )


}

export default Login;