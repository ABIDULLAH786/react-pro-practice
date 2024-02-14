import React from 'react'
import PageHeader from '../../../components/admin/PageHeader/PageHeader'
import styles from "./all-users.module.scss"
import UsersTable from '../../../components/common/Tables/UsersTables/UsersTable'
import AllUsersControls from '../../../components/admin/AllUsersControls/AllUsersControls'
import { Divider } from '@mui/material'
import { userData } from '../../../assets/data/usersData'

import { UserTableContextProvider } from '../../../context/UsersTableContext'

function AllUsers() {
    return (
        <UserTableContextProvider>
            <div className={styles.root}>
                <div className={styles.header_container}>

                    <PageHeader title="All Users" subTitle={'View your team’s user name, ID and role.'} />
                </div>
                <div>
                    <AllUsersControls />
                </div>
                <div style={{ marginBlock: '32px' }} >
                    <Divider component="div" />
                    {/* <Divider component={'div'} style={{ margin: "0px 32px" }} /> */}
                </div>
                <div>
                    <UsersTable
                        columns={['User Name', "ID", 'User', '']}
                        rows={userData}
                    />
                </div>


            </div>
        </UserTableContextProvider>

    )
}

export default AllUsers