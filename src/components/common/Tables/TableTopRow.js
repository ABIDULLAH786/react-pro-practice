import React from 'react'
import styles from './Table.module.scss'
import { TableCell, TableRow } from '@mui/material'
function TableTopRow({ columns }) {
    return <TableRow>
        {columns?.map((column, index) =>
            <TableCell className={styles.table_heading} style={{ paddingLeft: index == 0 ? "45px" : "" }}>{column}</TableCell>
        )}
    </TableRow>
}

export default TableTopRow