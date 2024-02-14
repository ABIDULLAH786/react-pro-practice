import { useEffect } from 'react';
import { selectIsUserLogin } from '../../redux/slice/auth';
import { useSelector } from 'react-redux';
import LoginFrom from '../../components/Forms/LoginForm/LoginFrom';
import { useNavigate } from 'react-router-dom';
const Login = () => {

    const navigate = useNavigate();

    const isLogin = useSelector(selectIsUserLogin)

    useEffect(() => {
        if (isLogin) {
            navigate("/admin/chats")
        }
    }, [isLogin])

    return (
        <div >
            <LoginFrom />
        </div>
    )


}

export default Login;