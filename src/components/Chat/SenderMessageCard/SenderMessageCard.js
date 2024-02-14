import React from 'react'
import UserAvatar from '../../Navbar/UserAvatar'
import styles from './SenderMessageCard.module.scss'
import { MediaIcon } from '../../../assets/icons/media-icon'
function SenderMessageCard({
    containFile = false,
    content,
    date,
    sender,
    file,
}) {


    return (
        <div>
            <div className={styles.message_info_container}>
                <div className={styles.sender_avatar}>
                    <UserAvatar width={20} height={20} />
                </div>
                <div className={styles.message_container}>
                    <div className={styles.message_sender_and_time_container}>
                        <div className={styles.sender_name}>
                            {sender?.name}
                        </div>
                        <div className={styles.message_time}>
                            {date}
                        </div>
                    </div>
                    {containFile && file ?
                        <div className={styles.file_container}>
                            <div className={styles.file_icon}>
                                <MediaIcon />
                            </div>
                            <div className={styles.file_name_size_container}>
                                <div className={styles.file_name}>{file?.name}</div>
                                <div className={styles.file_size}>{file?.size}</div>
                            </div>
                        </div> :
                        <div className={styles.message}>
                            {content}
                        </div>}
                </div>
            </div>
        </div>
    )
}

export default SenderMessageCard