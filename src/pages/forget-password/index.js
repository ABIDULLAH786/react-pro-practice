import { useEffect, useState } from 'react';
import { requestForgetPasswordAsync, selectIsSuccess } from '../../redux/slice/auth';
import { useDispatch, useSelector } from 'react-redux';
import ForgetPasswordForm from './ForgetPasswordForm/ForgetPasswordForm';
const ForgetPassword = () => {
    const dispatch = useDispatch();
    const isSuccess = useSelector(selectIsSuccess)
    const [formData, setFormData] = useState({
        email: "",
    });
    const [isError, setIsError] = useState('')
    useEffect(() => {
        if (isSuccess)
            alert("link set to your email for reset password, please check your email")
    }, [isSuccess])
    function handleSubmit() {
        if (formData.email?.length < 1) {
            setIsError("Provide email first")
            return
        }
        dispatch(requestForgetPasswordAsync({ ...formData }))
    }



    return (
        <div >
            <ForgetPasswordForm setFormData={setFormData} formData={formData} handleSubmit={handleSubmit} isError={isError} setIsError={setIsError} />
        </div>
    )


}

export default ForgetPassword;