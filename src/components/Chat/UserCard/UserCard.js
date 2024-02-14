import React from 'react'
import UserAvatar from '../../Navbar/UserAvatar'
import styles from './UserCard.module.scss'
function UserCard({ title, subTitle, callback }) {
    return (
        <div className={styles.root} onClick={() => {
            callback();
        }}>
            <div className={styles.user_card}>
                <div className={styles.user_avatar}>
                    <UserAvatar width='20px' height='20px' inital={title.split(' ').map(word => word.charAt(0).toUpperCase()).join("")}  />
                </div>
                <div className={styles.titles_container}>
                    <div className={styles.title}>
                        {title}
                    </div>
                    <div className={styles.sub_title}>
                        {subTitle}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserCard