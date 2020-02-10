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

function createData(month, avg, change , percent) {
  return { month, avg, change , percent };
}

const rows = [
  createData('Jan 19', '₹ 50,000' , '',''),
  createData('Feb 19', '₹ 31,592' , '-₹ 18,408','(-36.81%)' ),
  createData('Mar 19', '₹ 32,166 ', '₹ 574','(1.82%)'),
  createData('Apr 19', '₹ 17,009', '-₹ 15,157','(-47.12%)'),
];

export default function DenseTable() {
  const classes = useStyles();

  return (
    <TableContainer>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell style={{border:'none'}}>Month</TableCell>
            <TableCell align="right" style={{border:'none', fontWeight: 'bold'}}>Average</TableCell>
            <TableCell align="right" style={{border:'none', fontWeight: 'bold'}}>Change</TableCell>
            <TableCell align="right" style={{border:'none', fontWeight: 'bold'}}></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row" style={{border:'none'}}>
                {row.month}
              </TableCell>
              <TableCell align="right" style={{border:'none'}}>{row.avg}</TableCell>
              <TableCell align="right" style={{border:'none', color:'red'}}>{row.change}</TableCell>
              <TableCell align="right" style={{border:'none', color:'blue'}}>{row.percent}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}