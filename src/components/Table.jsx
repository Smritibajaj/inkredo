import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles({
});

function createData(name, value, amount) {
  return { name, value, amount };
}

const rows = [
  createData('Beginning balance', '' ,  '₹ 9,256'),
  createData(' Deposits and Balance', 160 , '₹ 8,01,056' ),
  createData('Checks Paid ', 0, ' ₹ 8,01,056'),
  createData('ATM Withdrawals', 80, '₹ 1,64,200 '),
  createData('Electronic Withdrawals', 228,'₹ 6,12,256'),
  createData('Other Withdrawals', 22, '₹ 41,084'),
  createData('Bank Fees ', 3, '₹11,180' ),
  createData('Ending balance', 493 , '₹ 18,408'),
];

export default function DenseTable() {
  const classes = useStyles();

  return (
    <TableContainer>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell style={{border:'none'}}></TableCell>
            <TableCell align="right" style={{border:'none', fontWeight: 'bold'}}>Instance</TableCell>
            <TableCell align="right" style={{border:'none', fontWeight: 'bold'}}>Amount </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row" style={{border:'none'}}>
                {row.name}
              </TableCell>
              <TableCell align="right" style={{border:'none'}}>{row.value}</TableCell>
              <TableCell align="right" style={{border:'none'}}>{row.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}