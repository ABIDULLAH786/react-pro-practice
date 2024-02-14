import React from 'react'
import styles from './OwnMessageCard.module.scss'
import { DocumentIcon } from '../../../assets/icons/document-icon'
function OwnMessageCard({
    messageInfo, // this will contain time, message content
    containFile,
}) {
    return (
        <div>
            <div className={styles.own_message_info_container}>
                <div className={styles.own_message_container}>
                    <div className={styles.own_username_and_time_container}>
                        <div className={styles.own_name}>
                            You
                        </div>
                        <div className={styles.own_message_time}>
                            Friday 3:20pm
                        </div>
                    </div>
                    {containFile ?
                        <div className={styles.file_container}>
                            <div className={styles.file_icon}>
                                <DocumentIcon />
                            </div>
                            <div className={styles.file_name_size_container}>
                                <div className={styles.file_name}>Latest design screenshot.jpg</div>
                                <div className={styles.file_size}>1.2 MB</div>
                            </div>
                        </div> :
                        <div className={styles.own_message}>
                            Hey Olivia, can you please review the latest design when you can?
                        </div>}
                </div>
            </div>
        </div>
    )
}

export default OwnMessageCard