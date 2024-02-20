import { FormControl, InputAdornment, InputLabel, OutlinedInput } from '@mui/material'
import React, { useEffect } from 'react'
import { makeStyles } from '@mui/styles';

function FormEmailFiled({ value, setValue, label, icon,isError, setIsError }) {
    const classes = useStyles();
    const validateEmail = (input) => {
        if (input?.length < 1)
            return true;
        // Regular expression for basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        return emailRegex.test(input);
    };
    useEffect(() => {
        setIsError({ ...isError,generalError:"", emailError: !validateEmail(value) })
    }, [value])
    return (
        <div>
            <InputLabel htmlFor="key" className={classes.label}>{label}</InputLabel>
            <FormControl sx={{ width: '100%' }} variant="outlined">
                <OutlinedInput
                    required
                    id={label}
                    type={'email'}
                    startAdornment={
                        <InputAdornment position="end" sx={{ mr: '10px', ml: '-5px' }}>
                            {icon}
                        </InputAdornment>
                    }
                    value={value}
                    onChange={setValue}
                />
                <div style={{ maxWidth: '230px' }}>
                    {!validateEmail(value) && (
                        <p className={classes.errors}> Invalid email format</p>
                    )}
                </div>
            </FormControl>
        </div>
    )
}

export default FormEmailFiled

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