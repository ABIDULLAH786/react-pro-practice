import React from 'react'
import { Box, Button } from '@mui/material';
import styles from './set-new-password.module.scss'
import { Link } from 'react-router-dom';
import { KeyIcon } from '../../../assets/icons/key-icon'
import FormPasswordField from '../../../components/FormPasswordFiled/FormPasswordField';

function SetNewPassword({ formData, setFormData, handleSubmit, isError, setIsError }) {

    return (
        <div className={styles.container}>
            <div className={styles.form_container}>
                <div className={styles.title_icon_container}>
                    <div className={styles.title}>Forget Password</div>
                </div>
                <Box className={styles.form_container}>
                    {/* key input */}
                    <div className={styles.input_container}>
                        <FormPasswordField value={formData?.newPassword} setValue={e => { setFormData({ ...formData, newPassword: e.target.value }); }} setIsError={setIsError} label={"New Password"} type='passowrd' icon={<KeyIcon color='#667085' />} />
                        <FormPasswordField value={formData?.confirmNewPassword} setValue={e => { setFormData({ ...formData, confirmNewPassword: e.target.value }); }} setIsError={setIsError} label={"Confirm New Password"} type='passowrd' icon={<KeyIcon color='#667085' />} />
                    </div>

                    {isError.length > 0 && <p className={styles.error}>{isError}</p>}

                    {/* button */}
                    <Button onClick={handleSubmit} className={styles.btn} variant="contained">Submit</Button>

                    <Box className={styles.para_text}>
                        <p><Link to="/login">Login</Link></p>
                    </Box>
                </Box>
            </div>
        </div>

    )
}

export default SetNewPassword