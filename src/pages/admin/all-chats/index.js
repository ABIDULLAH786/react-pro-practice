import React from 'react'
import PageHeader from '../../../components/admin/PageHeader/PageHeader'
import styles from "./all-chats.module.scss"
import { chatsData } from '../../../assets/data/chatsData'
import ChatsTable from '../../../components/common/Tables/ChatsTable/ChatsTable'
function AllChats() {
    return (
        <div className={styles.root}>
            <div className={styles.header_container}>

                <PageHeader title="All Chats" subTitle={'View your chats, add a user to a chat, and creat a chat.'} />
            </div>
            <div>
                <ChatsTable
                    columns={['Name chat', 'User', '']}
                    rows={chatsData}
                />
            </div>


        </div>
    )
}

export default AllChats