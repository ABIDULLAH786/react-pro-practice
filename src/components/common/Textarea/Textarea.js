import React from 'react'
import styles from './Textarea.module.scss'
import { TextField } from '@mui/material'

function Textarea() {
    return (
        <div className={styles.root} >
            <TextField
                id="message_input"
                multiline
                rows={4}
                placeholder='Type a message...'
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignSelf: "stretch",
                    width: "100%",
                    backgroundColor: '#FFF'
                }}
                

            />
        </div>
    )
}

export default Textarea