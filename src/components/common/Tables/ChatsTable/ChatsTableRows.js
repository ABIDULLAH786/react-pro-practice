import { IconButton, TableCell, TableRow } from '@mui/material'
import React from 'react'
import UserCard from '../../../Chat/UserCard/UserCard'
import styles from "../Table.module.scss"
import MultiSelect from '../../MultiSelect/MultiSelect'
import { Link } from 'react-router-dom'
import { ArrowNext } from '../../../../assets/icons/arrow-next'
import { userData } from '../../../../assets/data/usersData'

function ChatsTableRows({ rows }) {
    return rows?.map((row) => <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
        <TableCell component="th" scope="row" sx={{ width: "200px" }}>
            <UserCard title={row?.chatInfo?.chatName} subTitle={`${row?.chatInfo?.no_users} users`} />
        </TableCell>


        <TableCell align="right">
            <MultiSelect listData={userData?.filter(user => { return { name: user.name, id: user.id } })} />
        </TableCell>
        <TableCell align="right">
            <IconButton>
                <Link to={'/admin/chat/' + row.id}>
                    <ArrowNext />
                </Link>
            </IconButton>
        </TableCell>
    </TableRow>)
}

export default ChatsTableRows