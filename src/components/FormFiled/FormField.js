import { FormControl, InputAdornment, InputLabel, OutlinedInput } from '@mui/material'
import React from 'react'
import { makeStyles } from '@mui/styles';

function FormField({ value, setValue, label, type = 'text', icon }) {
    const classes = useStyles();
    return (
        <div>
            <InputLabel htmlFor="key" className={classes.label}>{label}</InputLabel>
            <FormControl sx={{ width: '100%' }} variant="outlined">
                <OutlinedInput
                    required
                    id={label}
                    type={type}
                    startAdornment={
                        <InputAdornment position="end" sx={{ mr: '10px', ml: '-5px' }}>
                            {icon}
                        </InputAdornment>
                    }
                    value={value}
                    onChange={e => setValue(e.target.value)}
                />

            </FormControl>
        </div>
    )
}

export default FormField

export const useStyles = makeStyles(() => ({
    label: {
        color: "#344054",
        fontSize: "14px",
        fontStyle: "normal",
        fontWeight: "500",
        lineHeight: "20px",
    },
}));