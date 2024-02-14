import React from 'react'
import { Avatar, IconButton, Tooltip, ListItemIcon, Menu, MenuItem, Divider, Box } from '@mui/material'
import { LogoutIcon } from '../../assets/icons/logout-icon';
import { useNavigate } from 'react-router-dom';
import UserAvatar from '../Navbar/UserAvatar';
import { makeStyles } from '@mui/styles';
function UserMenu() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const navigate = useNavigate();
    function handleSignOut() {
        navigate("/")
    }
    const menuItemsList = [
        {
            id: 1,
            title: 'View profile',
            icon: null,
        },
        {
            id: 2,
            title: 'Settings',
            icon: null,
        },
        {
            id: 3,
            title: 'Another profile',
            icon: null,
        },
        {
            id: 4,
            title: 'Log out',
            icon: <LogoutIcon />,
        },
    ]
    return (
        <Box >
            <Tooltip title="Account settings">
                <UserAvatar handleClick={handleClick} open={open} />
            </Tooltip>
            <Menu
                className={classes.menu}

                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <MenuItem onClick={handleClose} className={classes.menu_head}>
                    <UserAvatar width='20px' height='20px' />

                    <div>
                        <div className={classes.user_name}>Olivia Rhye</div>
                        <div className={classes.user_id}>ID 97737d</div>
                    </div>
                </MenuItem>
                <Divider component='div' />

                {menuItemsList?.map((menuItem, index) =>
                    <MenuItem key={index} className={classes.menu_item} onClick={handleSignOut}>
                        {menuItem?.icon !== null && <ListItemIcon>
                            {menuItem.icon}
                        </ListItemIcon>}
                        {menuItem.title}
                    </MenuItem>
                )}



            </Menu>
        </Box >
    )
}

export default UserMenu

export const useStyles = makeStyles(() => ({
    menu: {
        "& .MuiPaper-root": {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            borderRadius: '8px',
            border: '1px solid var(--Dark-gray-blue-500, #264E82)',
            background: 'var(--Dark-gray-blue-900, #001D4F)',
            boxShadow: '0px 4px 6px -2px rgba(16, 24, 40, 0.03), 0px 12px 16px -4px rgba(16, 24, 40, 0.08)',
            color: 'white',
            width: '240px',

        },
        "& ul": {
            width: "100%",
        }
    },
    menu_head: {
        display: 'flex',
        padding: '12px 16px',
        flexDirection: 'row',
        alignItems: 'flex-start',
        alignSelf: 'stretch',
        gap: '12px',
    },
    user_name: {
        alignSelf: 'stretch',
        color: 'var(--White, #FFF)',
        // fontFamily: 'Inter',
        fontSize: '14px',
        fontStyle: 'normal',
        fontWeight: 600,
        lineHeight: '20px',
    },
    user_id: {
        color: 'var(--Gray-300, #D0D5DD)',
        // fontFamily: 'Inter',
        fontSize: '14px',
        fontStyle: 'normal',
        fontWeight: 400,
        lineHeight: '20px',
    },
    menu_item: {
        display: 'flex',
        padding: '10px 16px',
        alignItems: 'center',
        alignSelf: 'stretch',
        "&:hover": {
            background: 'var(--Primary-600, #0090EA) !important',
        },

        color: 'var(--White, #FFF)',
        fontSize: '14px',
        fontStyle: 'normal',
        fontWeight: 500,
        lineHeight: '20px',
    },
    text_style: {
        color: 'var(--White, #FFF)',
        fontSize: '14px',
        fontStyle: 'normal',
        fontWeight: 500,
        lineHeight: '20px',
    },
}));