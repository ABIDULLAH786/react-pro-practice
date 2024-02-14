import React, { useState } from 'react'
import { LockIcon } from '../../../assets/icons/lock-icon';
import { Box, Button } from '@mui/material';
import FormField from '../../FormFiled/FormField';
import styles from './login.module.scss'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {UserIcon} from '../../../assets/icons/user-icon' 
import {KeyIcon} from '../../../assets/icons/key-icon' 

function LoginFrom() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    function handleSignin() {
        localStorage.setItem("role", "admin")
        navigate("/admin/chats")
        // dispatch(loginUserAsync({ email, password }))
    }
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
                        <FormField value={email} setValue={setEmail} label={"Email"} type='email' icon={<UserIcon color='#667085' />} />
                        <FormField value={password} setValue={setPassword} label={"Password"} type='password' icon={<KeyIcon />} />
                    </div>

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