import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

function createData(argument) {
    return argument.map(arg => <TableCell>{arg}</TableCell>);
}

const DynamicTable = (props) => {
    const classes = useStyles();
console.log(props);
    return (
        <TableContainer>
            <Table className={classes.table} aria-label="caption table">
                <TableHead style={{ backgroundColor: '#F2F5FE'}}>
                    {props.header.map(head => <TableRow>{createData(head)}</TableRow>)}
                </TableHead>
                <TableBody style={{borderColor:'#F2F5FE'}}>
                    {props.data.map(row => <TableRow>{createData(row)}</TableRow>)}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default DynamicTable;