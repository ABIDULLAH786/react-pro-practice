import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { registerUserAsync } from '../../../redux/slice/auth';
import { LockIcon } from '../../../assets/icons/lock-icon';
import { Box, Button } from '@mui/material';
import styles from './register.module.scss'
import FormPasswordField from '../../../components/FormPasswordFiled/FormPasswordField';
import FormEmailFiled from '../../../components/FormEmailFiled/FormEmailFiled';
import FormTextFiled from '../../../components/FormTextFiled/FormTextFiled';

function RegisterForm({ formData, setFormData, handleRegister, isError, setIsError }) {

    return (
        <div className={styles.container}>
            <div className={styles.register_container}>
                <div className={styles.title_icon_container}>
                    <LockIcon />
                    <div className={styles.title}>Register</div>
                </div>
                <Box className={styles.form_container}>
                    {/* key input */}
                    <div className={styles.input_container}>
                        <FormTextFiled value={formData?.name} setValue={e => setFormData({ ...formData, name: e.target.value })} label={"Name"} type='text' />
                        <FormEmailFiled value={formData?.email} setValue={e => setFormData({ ...formData, email: e.target.value })} setIsError={setIsError} isError={isError} label={"Email"} />
                        <FormPasswordField value={formData?.password} setValue={e => setFormData({ ...formData, password: e.target.value })} setIsError={setIsError} isError={isError} label={"Password"} />
                    </div>
                    {isError.generalError  && <p className={styles.error}>{isError.generalError}</p>}
                    {/* button */}
                    <Button onClick={handleRegister} className={styles.btn} variant="contained">Register</Button>

                    <Box className={styles.para_text}>
                        <p>Do have account, login <Link to="/">here</Link></p>
                    </Box>
                </Box>
            </div>
        </div>
    )
}

export default RegisterForm