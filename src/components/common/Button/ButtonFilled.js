import React from 'react'
import styles from './Button.module.scss'
import { Button, IconButton } from '@mui/material'



function ButtonFilled({ children,
    iconBefore,
    icon, text,
    width, height,
    color = "white",
    padding = "10px 18px",
    backgroundColor = "#0090EA",
    borderRadius = "8px",
    border = "1px solid #0090EA",
    disable = false,
    onClick = () => { },
}) {
    const buttonStyle = {
        borderRadius: borderRadius,
        border: border,
        background: backgroundColor,
        boxShadow: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
        color: color,
        minWidth: '40px',

        display: "flex",
        padding: { padding },
        justifyContent: "center",
        alignItems: "center",
        gap: "8px",

        /* Text style */
        // fontFamily: "Inter",
        fontSize: "14px",
        fontStyle: "normal",
        fontWeight: "500",
        lineHeight: "normal",
        textTransform: 'capitalize',
    }
    if (icon) {
        return <IconButton style={buttonStyle} aria-label="button">
            {icon}
        </IconButton>

    } else {
        return <Button style={buttonStyle}
            aria-label="button"
            onClick={onClick}

        >
            {iconBefore && iconBefore}
            {text}
        </Button>
    }

}

export default ButtonFilled