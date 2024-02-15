import React, { useContext, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/material';
import TableTopRow from './TableTopRow';
import UsersTableRows from './UsersTableRows';

import styles from "./Table.module.scss"
import UserTableFooter from './UserTableFooter';

export default function UsersTable({ columns, rows }) {
    
    return (
        <TableContainer component={Paper} className={styles.root}>
            <Table size="small" aria-label="data table" >
                <TableHead>
                    <TableTopRow columns={columns} />
                </TableHead>
                <TableBody>
                    <UsersTableRows rows={rows} />
                </TableBody>
            </Table>
            <Box style={{ width: '100%' }}>
                <UserTableFooter data={rows} />
            </Box>
        </TableContainer >
    );
}

