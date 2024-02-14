import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/material';
import styles from "../Table.module.scss"
import TableTopRow from '../TableTopRow';
import ChatsTableRows from './ChatsTableRows';
import ChatsTableFooter from './ChatsTableFooter';

export default function ChatsTable({ columns, rows }) {



    return (
        <TableContainer component={Paper} className={styles.root}>
            <Table size="small" aria-label="data table" >
                <TableHead>
                    <TableTopRow columns={columns} />
                </TableHead>
                <TableBody>
                    <ChatsTableRows rows={rows} />
                </TableBody>

            </Table>
            <Box style={{ width: '100%' }}>
                <ChatsTableFooter data={rows} />
            </Box>
        </TableContainer >
    );
}

