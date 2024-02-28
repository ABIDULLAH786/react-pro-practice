import { useState } from 'react';
import { resetPasswordAsync } from '../../redux/slice/auth';
import { useDispatch } from 'react-redux';
import ForgetPasswordForm from './SetNewPasswordForm/SetNewPasswordForm';
import { useLocation } from 'react-router-dom';
const NewPassowrdPage = () => {
    const path = useLocation();
    const str = path.search;
    const search = str.split('=');
    const token = search.slice(1).join('=');

    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        newPassword: "",
        confirmNewPassword: "",
    });
    const [isError, setIsError] = useState('')

    function handleSubmit() {
        if (formData.newPassword?.length < 1 || formData.confirmNewPassword?.length < 1) {
            setIsError("Fill all fileds")
            return
        } else if (formData.newPassword !== formData.confirmNewPassword) {
            setIsError("Password and New Password does not match")
            return
        }
        dispatch(resetPasswordAsync({ password: formData.newPassword, token }))
    }

    return (
        <div >
            <ForgetPasswordForm setFormData={setFormData} formData={formData} handleSubmit={handleSubmit} isError={isError} setIsError={setIsError} />
        </div>
    )


}

export default NewPassowrdPage;