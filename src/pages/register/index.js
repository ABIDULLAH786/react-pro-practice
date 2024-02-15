import { useNavigate } from 'react-router-dom';
import RegisterForm from './RagisterForm/RegisterForm';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
const Register = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    });
    function handleRegister() {
        // dispatch(registerUserAsync({ ...formData }))
    }
    return (
        <div>
            <RegisterForm setFormData={setFormData} formData={formData} handleRegister={handleRegister} />
        </div>
    )


}

export default Register;