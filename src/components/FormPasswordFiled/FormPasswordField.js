import { FormControl, InputAdornment, InputLabel, OutlinedInput } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { makeStyles } from '@mui/styles';
import PasswordStrengthMetter from './PasswordStrengthMetter';
import { isStrongPassword } from './isStrongPassword';

function FormPasswordField({ value, setValue, label, icon, isError, setIsError }) {
    const classes = useStyles();
    useEffect(() => {
        setIsError({ ...isError, generalError: "", passError: isStrongPassword(value) !== null })
    }, [value])
    return (
        <div>
            <InputLabel htmlFor="key" className={classes.label}>{label}</InputLabel>
            <FormControl sx={{ width: '100%' }} variant="outlined">
                <OutlinedInput
                    required
                    id={label}
                    type={'password'}
                    startAdornment={
                        <InputAdornment position="end" sx={{ mr: '10px', ml: '-5px' }}>
                            {icon}
                        </InputAdornment>
                    }
                    value={value}
                    onChange={setValue}
                />
                <div style={{ maxWidth: '230px' }}>
                    <PasswordStrengthMetter password={value} />
                    {isStrongPassword(value) !== null && value?.length > 0 && (
                        <>
                            <p className={classes.errors}> {isStrongPassword(value)}</p>
                        </>
                    )}
                </div>
            </FormControl>
        </div>
    )
}

export default FormPasswordField

export const useStyles = makeStyles(() => ({
    label: {
        color: "#344054",
        fontSize: "14px",
        fontStyle: "normal",
        fontWeight: "500",
        lineHeight: "20px",
    },
    errors: {
        color: 'red',
        fontSize: "12px",
        fontStyle: "normal",
        fontWeight: "400",
    },
    red: {
        color: "red",
    }

}));