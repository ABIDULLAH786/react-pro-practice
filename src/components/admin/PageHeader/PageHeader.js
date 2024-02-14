import React from 'react'
import styles from './PageHeader.module.scss'
import InputFiled from '../../common/InputFiled/InputFiled'
import ButtonFilled from '../../common/Button/ButtonFilled'
import { Grid } from '@mui/material'
function PageHeader({ title, subTitle }) {
    return (
        <div>
            <Grid container className={styles.card}>
                <Grid item className={styles.left}>
                    <div className={styles.title}>
                        {title}
                    </div>
                    <div className={styles.sub_title}>
                        {subTitle}
                    </div>
                </Grid>
                <Grid item className={styles.right}>
                    <div className={styles.search}>
                        <InputFiled label="New chat name" />
                    </div>
                    <div className={styles.create_btn}>
                        <ButtonFilled text="Create" />
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default PageHeader