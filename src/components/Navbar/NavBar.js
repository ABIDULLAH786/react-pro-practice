import React, { useEffect } from 'react'
import styles from './NavBar.module.scss'
import { MessageIcon } from '../../assets/icons/message-icon'

import UserMenu from '../UserMenu/UserMenu';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { UsersIcon } from '../../assets/icons/users-icon';
function NavBar() {
    let userItems = [
        {
            id: 1,
            path: "/chats",
            text: "Chats",
            icon: <MessageIcon />,
        },
    ]


    let adminItems = [
        {
            id: 1,
            path: "/admin/chats",
            text: "Chats",
            icon: <MessageIcon />,
        },
        {
            id: 1,
            path: "/admin/users",
            text: "All Users",
            icon: <UsersIcon />
        }
    ]
    const location = useLocation();
    const navigate = useNavigate();
    let currentRoleItems = localStorage?.getItem('role') === "user" ? userItems : localStorage?.getItem('role') === "admin" ? adminItems : null;
    useEffect(() => {
        if (currentRoleItems === null) {
            navigate('/')
        }
    }, [currentRoleItems, navigate])
    return (
        <div className={styles.container}>

            <div style={{ display: 'flex' }}>
                {currentRoleItems?.map(item =>
                    <Link to={item.path} className={location?.pathname === item.path ? styles.active_tab : styles.tab} >
                        <div >
                            {React.cloneElement(item.icon, {
                                color: location?.pathname === item.path ? 'white' : '#8097B6',
                            })}
                        </div>
                        <div className={styles.tab_text}>
                            {item?.text}
                        </div>
                    </Link>)}
            </div>
            <div className={styles.top_menu}>
                <UserMenu />
            </div>
        </div >
    )
}

export default NavBar