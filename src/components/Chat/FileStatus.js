import React from 'react'
import FilesCard from './FIlesCard/FilesCard'
import styles from './chat.module.scss'
function FileStatus() {
    const noError = true;
    return (
        <>
            {/* <div className={styles.files_container}>
                <FilesCard title="Tech design requirements.pdf" size="200KB" status="Pending" />
                <FilesCard title="Tech design requirements.pdf" size="200KB" status="Done" />
                <FilesCard title="Tech design requirements.pdf" size="200KB" status="error" /> 
            </div>
            <div className={styles.upload_container}>
                <ButtonFilled text="Upload" backgroundColor='#EDF6FD' color='#0083DC' />
                <ButtonFilled text="All cancel" backgroundColor='#EDF6FD' color='#0083DC' border="none" />
            </div>
        */}
        </>
    )
}

export default FileStatus