import { IconButton, TableCell, TableRow } from '@mui/material'
import React from 'react'
import styles from './Table.module.scss'
import UserCard from '../../../../components/Chat/UserCard/UserCard'
import SelectDropdown from '../../../../components/common/SelectDropdown/SelectDropdown'
import { DeleteIcon } from '../../../../assets/icons/delete-icon'

function UsersTableRows({ rows }) {
    return rows?.map((row) => <TableRow
        key={row.id}
        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    >
        <TableCell component="th" scope="row" sx={{ width: "200px" }}>
            <UserCard title={row?.name} />
        </TableCell>
        <TableCell component="th" scope="row" className={styles.row_data}>
            {row?.id}
        </TableCell>

        <TableCell align="right">
            <SelectDropdown options={["admin", "user"]} />
        </TableCell>
        <TableCell align="right">
            <IconButton>
                <DeleteIcon />
            </IconButton>
        </TableCell>
    </TableRow>)
}

export default UsersTableRows