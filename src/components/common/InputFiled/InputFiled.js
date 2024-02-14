import { TextField } from '@mui/material'
import React from 'react'

function InputFiled({ label }) {


    return (
        <TextField
            id="text-filed"
            variant="outlined"
            InputLabelProps={{ shrink: false }}
            placeholder={label}
            style={{
                display: "flex",
                flexDirection: "column",
                alignSelf: "stretch",
                width: "100%",
                backgroundColor: '#FFF',
                borderRadius: '5px'
            }}
            InputProps={{ sx: { height: 38 } }}
        />
    )
}

export default InputFiled

