import React from 'react'
import { Box, Button } from '@mui/material';
import FormTextFiled from '../../../components/FormTextFiled/FormTextFiled';
import styles from './forget-password.module.scss'
import { Link } from 'react-router-dom';
import { UserIcon } from '../../../assets/icons/user-icon'

function ForgetPasswordForm({ formData, setFormData, handleSubmit, isError, setIsError }) {

    return (
        <div className={styles.container}>
            <div className={styles.form_container}>
                <div className={styles.title_icon_container}>
                    <div className={styles.title}>Forget Password</div>
                </div>
                <Box className={styles.form_container}>
                    {/* key input */}
                    <div className={styles.input_container}>
                        <FormTextFiled value={formData?.email} setValue={e => { setFormData({ ...formData, email: e.target.value }); setIsError("") }} label={"Email"} type='email' icon={<UserIcon color='#667085' />} />
                    </div>

                    {isError.length > 0 && <p className={styles.error}>{isError}</p>}

                    {/* button */}
                    <Button onClick={handleSubmit} className={styles.btn} variant="contained">Submit</Button>

                    <Box className={styles.para_text}>
                        <Link to="/login">Login</Link>
                    </Box>

                </Box>
            </div>
        </div>

    )
}

export default ForgetPasswordForm