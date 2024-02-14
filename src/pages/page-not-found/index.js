import React from 'react'
import styles from './404.module.scss'
function PageNotFound() {
    return (
        <div className={styles.container}>
            <div>
                <h1 className={styles.heading}>404 </h1>
                <h3>Opps! This Page Could Not Be Found</h3>
            </div>
        </div>
    )
}

export default PageNotFound