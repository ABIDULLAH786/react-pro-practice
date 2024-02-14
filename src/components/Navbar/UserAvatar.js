import { Avatar, IconButton } from '@mui/material'
import React from 'react'
import { UserIcon } from '../../assets/icons/user-icon'

const avatar = {
    display: "flex",

    padding: "8px",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "200px",
    background: "linear-gradient(45deg, #0060B8 0%, #0090EA 100%)",

    // avatar inital/text style
    color: "#F4FAFE",
    textAlign: "center",

    // fontFamily: "Inter",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "24px",
}

function UserAvatar({ handleClick, open, width = "40px", height = "40px", inital }) {

    return (
        <IconButton
            onClick={handleClick}
            size="small"
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
        >
            <Avatar sx={{ width, height }} style={avatar}>
                {inital ? inital : <UserIcon />}
            </Avatar>
        </IconButton>
    )
}

export default UserAvatar