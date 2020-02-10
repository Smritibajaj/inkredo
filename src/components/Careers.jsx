import React from 'react';
import { connect } from "react-redux";
import '../stylesheets/Careers.scss';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import UpdateIcon from '@material-ui/icons/Update';
import PublicIcon from '@material-ui/icons/Public';
import PostAddIcon from '@material-ui/icons/PostAdd';

function Careers(props) {
  const { literals } = props;
  const link = 'https://forms.gle/dwZ9ZwhfXcvTXt7c8';
  const  data = [ { 
    name: literals.engineering,
    rows : [
    createData('Backend Developer', 'Remote'),
    createData('Frontend Developer', 'Remote'),
  ]},
  { name: literals.marketing,
    rows : [createData('Growth Developer', 'Remote'),]}
]

  function createData(jobname, place) {
    return { jobname, place };
  }

  return (<>

    <Grid container justify={'center'} className="m-b-30">
      <Grid item xs={6} >
        <h1 className="heading">{literals.careerHeading}</h1>
        <p className="subheading">{literals.careerSubHeading}</p>
      </Grid>
    </Grid>
    <Grid container justify="center" className="background p-t-20">
      <Grid item xs={8} alignItems="center" >
        <h6 className="tableheading m-t-10">{literals.openPosition}</h6>
        {data.map(id => (<TableContainer >
          <Table aria-label="simple table">
            <TableHead>
              <TableRow >
                <TableCell >{id.name}</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            
            <TableBody>
            
              {id.rows.map(row => (
                <TableRow key={row.jobname}>                  
                  <TableCell component="th" scope="row" className="highlight p-l-30 p-r-30">
                  <a target="_blank" href={link}>{row.jobname} </a>
                  </TableCell>
                  <TableCell ><a target="_blank" href={link}>{row.place} </a></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>))}
      </Grid>
    </Grid>
    <Grid container item sm={10}>
    <Grid item xs={6} >
        <h1 className="heading">{literals.culture}</h1>
        </Grid>
    </Grid>
    <Grid container justify={'center'}>
      <Grid container item xs={10} spacing={5} alignItems="baseline" className="m-b-30">
        <Grid container item xs={4} direction="column" justify={'center'} >
          <PublicIcon color="primary" fontSize="large"/>
          <h6 className="careerText">{literals.careerHeading1}</h6>
          <p className="subheading">{literals.careerMsg1}</p>
        </Grid>
        <Grid container item xs={4} direction="column" justify={'center'} >
          <PostAddIcon color="primary" fontSize="large"/>
              <h6 className="careerText">{literals.careerHeading2}</h6>
          <p className="subheading">{literals.careerMsg2}</p>
        </Grid>
        <Grid container item xs={4} direction="column" justify={'center'} >
          <UpdateIcon color="primary" fontSize="large"/>
              <h6 className="careerText">{literals.careerHeading3}</h6>
          <p className="subheading">{literals.careerMsg3}</p>
        </Grid>
      </Grid>
    </Grid>
    <Grid container justify={'center'} className="m-b-40">
      <Grid container item sm={10}  >
        <Grid item sm={8} >
          <p className="subheading">{literals.careerMsg4}</p>
          <h2 className="heading">{literals.careerMsg5}</h2>
          <p className="subheading">{literals.careerMsg6}</p>
        </Grid>
      </Grid>
    </Grid>
  </>
  );
}


const mapStateToProps = ({ literals }) => ({
  literals
});

export default connect(mapStateToProps)(Careers);