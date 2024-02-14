import React from 'react'
import NavBar from '../components/Navbar/NavBar'
import styles from './style.module.scss'
import { Outlet } from 'react-router-dom'
function AdminLayout() {
    return (
        <>
            <NavBar />
            <div className={styles.layout_container} >
                <Outlet />
            </div>
        </>
    )
}

export default AdminLayout