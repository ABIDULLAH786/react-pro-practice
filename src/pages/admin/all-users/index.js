import React, { useCallback, useEffect, useMemo, useState } from 'react'
import PageHeader from '../../../components/admin/PageHeader/PageHeader'
import styles from "./all-users.module.scss"
import UsersTable from './UsersTables/UsersTable'
import AllUsersControls from '../../../components/admin/AllUsersControls/AllUsersControls'
import { Divider } from '@mui/material'
import { userData } from '../../../assets/data/usersData'

import { UserTableContextProvider } from '../../../context/UsersTableContext'
import { extractPageData } from '../../../utils/extractPageData'

function AllUsers() {
    const [tableData, setTableData] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const [currentPageData, setCurrentPageData] = useState([]);
    const [numberOfRecPerPage] = useState(10);


    console.log("currentPageData:: ", currentPageData)
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    useEffect(() => {
        // Get current list/page data
        if (userData) {
            const data = extractPageData(userData, currentPage, numberOfRecPerPage)
            console.log(data)
            setCurrentPageData(data)
        }
    }, [currentPage, userData])
    useEffect(() => {
        setTableData(userData)
    }, [])
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
                        rows={currentPageData}
                        perPageRec={numberOfRecPerPage}
                        total={tableData.length}
                        page={currentPage}
                        handlePageChange={paginate}
                    />
                </div>


            </div>
        </UserTableContextProvider>

    )
}

export default AllUsers