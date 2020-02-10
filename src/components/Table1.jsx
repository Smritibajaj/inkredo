import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles({
});

function createData(date, amount, balance, category, name, particular) {
  return { date, amount, balance, category, name, particular };
}

const rows = [
  createData('    ', '₹8000', '₹15000', 'TRANSFER', 'EARNING', '     '),
  createData('     ', '₹7000', '₹25000', 'TRANSFER', 'CREDIT', '     '),
  createData('     ', '₹5000', '₹35000', 'TRANSFER', 'CREDIT', '     '),
];

export default function DenseTable() {
  const classes = useStyles();

  return (
    <>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell style={{ border: 'none',fontWeight: 'bold' }}>Date</TableCell>
            <TableCell align="right" style={{ border: 'none', fontWeight: 'bold', padding: '0px',fontSize: '14px' }}>Amount </TableCell>
            <TableCell align="right" style={{ border: 'none', fontWeight: 'bold', padding: '0px',fontSize: '14px' }}>Balance </TableCell>
            <TableCell align="right" style={{ border: 'none', fontWeight: 'bold', padding: '0px',fontSize: '14px' }}>Category </TableCell>
            <TableCell align="right" style={{ border: 'none', fontWeight: 'bold', padding: '0px',fontSize: '14px' }}></TableCell>
            <TableCell align="right" style={{ border: 'none', fontWeight: 'bold', padding: '0px',fontSize: '14px' }}>Particulars</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name} style={{ marginBottom:'2px'}}>
              <TableCell scope="row" style={{ border: 'solid  white 5px' , backgroundColor:'#F2F5FE', padding: '0px',fontSize: '14px'}}>{row.date}</TableCell>
              <TableCell align="right" style={{ border: 'none', padding: '0px',fontSize: '14px', color:'blue' }}>{row.amount}</TableCell>
              <TableCell align="right" style={{ border: 'none', padding: '0px',fontSize: '14px' }}>{row.balance}</TableCell>
              <TableCell align="right" style={{ border: 'solid  white 5px' , padding: '0px',fontSize: '14px',backgroundColor:'#F2F5FE', color:'blue' }}>{row.category}</TableCell>
              <TableCell align="right" style={{ border: 'solid  white 5px' , padding: '0px',fontSize: '14px',backgroundColor:'#F2F5FE', color:'blue' }}>{row.name}</TableCell>
              <TableCell align="right" style={{ border: 'solid  white 5px' , padding: '0px',fontSize: '14px', backgroundColor:'#F2F5FE', color:'blue' }}><div>{row.particular}</div></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}