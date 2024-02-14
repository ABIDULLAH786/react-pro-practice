import React from 'react'
import InputFiled from '../../common/InputFiled/InputFiled'
import ButtonFilled from '../../common/Button/ButtonFilled'
import styles from './AllUsersControls.module.scss'
import { Grid } from '@mui/material'
import { KeyIcon } from '../../../assets/icons/key-icon'
import { AddUserIcon } from '../../../assets/icons/add-user-icon'
function AllUsersControls() {
    return (

        <Grid container className={styles.root}>
            <Grid item xs={12} md={7} className={styles.inputs_container}>
                <InputFiled label="New user" />
                <InputFiled label="Auth Key" />
            </Grid>
            <Grid item xs={12} md={5} className={styles.buttons_container}>
                <ButtonFilled
                    backgroundColor='#FFF'
                    text={"Generate auth key"}
                    color='#344054'
                    border="1px solid #FFF"
                    iconBefore={<KeyIcon />}
                />
                <ButtonFilled text={"New user"} iconBefore={<AddUserIcon />} />
            </Grid>
        </Grid>
    )
}

export default AllUsersControls