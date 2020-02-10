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

function createData(category, date, narration, defaults, balance) {
  return { category, date, narration, defaults, balance };
}

const rows = [
  createData('    ', '','', '₹10000','₹7452'),
  createData('    ', '','', '₹10000','₹1561'),
  createData('    ', '','', '₹10000','₹174'),
  createData('    ', '','', '₹10000','₹2145')
];

export default function DenseTable() {
  const classes = useStyles();

  return (
    <TableContainer>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell style={{ border: 'none',fontWeight: 'bold' }}>Category</TableCell>
            <TableCell align="right" style={{ border: 'none', fontWeight: 'bold' }}>Date </TableCell>
            <TableCell align="right" style={{ border: 'none', fontWeight: 'bold' }}>Narration </TableCell>
            <TableCell align="right" style={{ border: 'none', fontWeight: 'bold' }}>Default </TableCell>
            <TableCell align="right" style={{ border: 'none', fontWeight: 'bold' }}>Balance</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name}>
              <TableCell scope="row" style={{ border: 'solid  white 5px' , backgroundColor:'#F2F5FE',fontSize: '14px' }}><div>{row.category}</div></TableCell>
              <TableCell align="right" style={{ border: 'solid  white 5px' , backgroundColor:'#F2F5FE', fontSize: '14px' }}>{row.date}</TableCell>
              <TableCell align="right" style={{ border: 'solid  white 5px' , backgroundColor:'#F2F5FE', fontSize: '14px' }}>{row.narration}</TableCell>
              <TableCell align="right" style={{ border: 'none', color:'red' }}>{row.defaults}</TableCell>
              <TableCell align="right" style={{ border: 'none', color:'blue' }}>{row.balance}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}