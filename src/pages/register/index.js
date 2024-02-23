import { useNavigate } from 'react-router-dom';
import RegisterForm from './RagisterForm/RegisterForm';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { registerUserAsync } from '../../redux/slice/auth';
import errorAlert from '../../alerts/errorAlert';
import successAlert from '../../alerts/successAlert';
const Register = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    });
    const [isError, setIsError] = useState({
        passError: false,
        emailError: false,
        generalError: ""
    })
    function handleRegister() {
        if (formData.name?.length < 1 || formData.email?.length < 1 || formData.password?.length < 1) {
            setIsError({ ...isError, generalError: "All fileds are rqeuired" })
            return
        }else if(isError.emailError || isError.emailError){
            setIsError({ ...isError, generalError: "Please resolve all errors first" })
            return
        }
        // dispatch(registerUserAsync({ ...formData })).then(res=>)
        // errorAlert();
        // successAlert();
    }
    return (
        <div>
            <RegisterForm setFormData={setFormData} formData={formData} handleRegister={handleRegister} isError={isError} setIsError={setIsError} />
        </div>
    )


}

export default Register;