import React, { useEffect, useState } from 'react'
import PageHeader from '../../../components/admin/PageHeader/PageHeader'
import styles from "./all-chats.module.scss"
import { chatsData } from '../../../assets/data/chatsData'
import ChatsTable from './ChatsTable/ChatsTable'
import { extractPageData } from '../../../utils/extractPageData'
function AllChats() {
    const [tableData, setTableData] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const [currentPageData, setCurrentPageData] = useState([]);
    const [numberOfRecPerPage] = useState(2);


    console.log("currentPageData:: ", currentPageData)
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    useEffect(() => {
        // Get current list/page data
        if (chatsData) {
            const data = extractPageData(chatsData, currentPage, numberOfRecPerPage)
            console.log(data)
            setCurrentPageData(data)
        }
    }, [currentPage, chatsData])
    useEffect(() => {
        setTableData(chatsData)
    }, [])
    return (
        <div className={styles.root}>
            <div className={styles.header_container}>

                <PageHeader title="All Chats" subTitle={'View your chats, add a user to a chat, and creat a chat.'} />
            </div>
            <div>
                <ChatsTable
                    columns={['Name chat', 'User', '']}
                    rows={currentPageData}
                    perPageRec={numberOfRecPerPage}
                    total={tableData.length}
                    page={currentPage}
                    handlePageChange={paginate}
                />
            </div>


        </div>
    )
}

export default AllChats