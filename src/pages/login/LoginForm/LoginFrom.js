import React, { useState } from 'react'
import { LockIcon } from '../../../assets/icons/lock-icon';
import { Box, Button } from '@mui/material';
import FormTextFiled from '../../../components/FormTextFiled/FormTextFiled';
import styles from './login.module.scss'
import { Link } from 'react-router-dom';
import { UserIcon } from '../../../assets/icons/user-icon'
import { KeyIcon } from '../../../assets/icons/key-icon'

function LoginFrom({ formData, setFormData, handleSignin, isError, setIsError }) {

    return (
        <div className={styles.container}>
            <div className={styles.login_container}>
                <div className={styles.title_icon_container}>
                    <LockIcon />
                    <div className={styles.title}>Sign in</div>
                </div>
                <Box className={styles.form_container}>
                    {/* key input */}
                    <div className={styles.input_container}>
                        <FormTextFiled value={formData?.email} setValue={e => { setFormData({ ...formData, email: e.target.value }); setIsError("") }} label={"Email"} type='email' icon={<UserIcon color='#667085' />} />
                        <FormTextFiled value={formData?.password} setValue={e => { setFormData({ ...formData, password: e.target.value }); setIsError("") }} label={"Password"} type='password' icon={<KeyIcon />} />
                    </div>

                    {isError.length > 0 && <p className={styles.error}>{isError}</p>}

                    {/* button */}
                    <Button onClick={handleSignin} className={styles.btn} variant="contained">Sign in</Button>

                    <Box className={styles.para_text}>
                        <p>Don't have account yet, create <Link to="/register">here</Link></p>
                    </Box>
                </Box>
            </div>
        </div>

    )
}

export default LoginFrom