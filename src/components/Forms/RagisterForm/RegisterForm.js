import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { registerUserAsync } from '../../../redux/slice/auth';
import { LockIcon } from '../../../assets/icons/lock-icon';
import FormField from '../../FormFiled/FormField';
import { Box, Button } from '@mui/material';
import styles from './register.module.scss'

function RegisterForm() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    function handleRegister() {
        dispatch(registerUserAsync({ name, email, password }))
    }
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
                        <FormField value={name} setValue={setName} label={"Name"} type='text' />
                        <FormField value={email} setValue={setEmail} label={"Email"} type='email' />
                        <FormField value={password} setValue={setPassword} label={"Password"} type='password' />
                    </div>

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