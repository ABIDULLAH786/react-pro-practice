import React from 'react'
import { Box, Divider } from '@mui/material'
import styles from "../Chat/chat.module.scss"
import { SendIcon } from '../../assets/icons/send-icon'
import Textarea from '../common/Textarea/Textarea'
import ButtonFilled from '../common/Button/ButtonFilled'
import LoadMessages from './LoadMessages'
import FileStatus from './FileStatus'
import ChooseFileButton from './ChooseFileButton'
import AttachmentButton from './AttachmentButton'
import UsersList from './UsersList'


function ChatComponent() {

    return (
        <div>

            <Box className={styles.container}>

                <Box style={{ width: ' 208px' }} className={styles.side_bar}>
                    <div className={styles.top_heading_container}>
                        <div className={styles.heading}>
                            Chat Name
                        </div>
                        <div className={styles.sub_heading}>
                            10 users
                        </div>
                    </div>
                    <Divider color='red' component="div" />
                    <div className={styles.users_list_container}>
                        <UsersList />
                    </div>
                </Box>

                <Box style={{ width: ' calc(100% - 210px)' }} className={styles.main_container}>
                    <div className={styles.message_top}>
                        <div className={styles.messages_title}> Messages </div>
                        <Divider color='red' component="div" />
                        <div className={styles.messages_container}>
                            <LoadMessages />
                        </div>
                    </div>
                    <Divider component="div" />

                    <div className={styles.message_footer}>
                        <div className={styles.typing_and_container}>
                            <div className={styles.attachment} >
                                <AttachmentButton />
                            </div>
                            <div className={styles.message_input}>
                                <Textarea />
                                <div >
                                    <FileStatus />
                                </div>
                                <div className={styles.choose_container}>
                                    <ChooseFileButton />
                                </div>
                            </div>
                            <div className={styles.send_btn}>
                                <ButtonFilled icon={<SendIcon />} />
                            </div>
                        </div>
                    </div>
                </Box>
            </Box>
        </div >
    )
}

export default ChatComponent