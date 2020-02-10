import React, { Component } from 'react';
import { connect } from "react-redux";
import Grid from '@material-ui/core/Grid';
import '../stylesheets/Home.scss';
import img from '../images/image2.png';
import CancelRoundedIcon from '@material-ui/icons/ClearRounded';
import StakedBarChart from './StakedBarChart';
import SteppedLineChart from './SteppedLineChart';
import SteppedLineChart1 from './SteppedLineChart1';
import Table from './Table';
import Table1 from './Table1';
import Table2 from './Table2';
import Table3 from './Table3';
import CodeFormat from './CodeFormat';
import EmailForm from './EmailForm';
import Block from './Block';

class Home extends Component {

    render() {
        const { literals } = this.props;
        return (
            <>
                <div className="container1 p-b-30">
                    <Grid container justify={'center'}>
                        <Grid item xs={8}>
                            <h1 className="header1">Make Tough credit calls accurately and effortlessly</h1>
                            <h6 className="subheader">Identify responsible borrowers from accurate banking transaction analysis</h6>
                            <h6 className="subheader1 p-t-50">Sign up now to analyse  <span>25 statements for free </span></h6>
                            <Grid container justify={'center'}>
                                <EmailForm />
                            </Grid>
                        </Grid>
                    </Grid>
                </div>



                <div className="container2">
                    <Grid container justify={'center'}>
                        <Grid item xs={12} sm={9} >
                            <div className="why">How does it works ?</div>
                        </Grid>
                        <Grid container justify={'center'}>
                            <img alt="here" src={img} width="684px" height="513px" />
                        </Grid>
                    </Grid>
                    <Grid container spacing={5} justify={'center'}>
                        <Grid item xs={5}>
                            <div className="steps">Step 1</div>
                            <div className="procedure">Upload unlimited pages in a statement</div>
                            <div className="sub-procedure">Choose your bank and upload your statement. There is no page limit for each statement</div>
                        </Grid>
                        <Grid item xs={5}>
                            <div className="steps">Step 2</div>
                            <div className="procedure">Analyse up-to-date financial behaviour of the borrower</div>
                            <div className="sub-procedure">Get a true picture of the finanlcial behaviour of the borrower with our algorithm</div>
                        </Grid>
                    </Grid>
                </div>



                <div className="p-b-30 container1">
                    <Grid container justify={'center'} >
                        <Grid item >
                            <div className="why">Pay only for what you use!<br />Save a ton of money</div>
                            <Grid container className="list-item">
                                <Grid item xs={6}>
                                    <div><CancelRoundedIcon color="secondary" fontSize="inherit" className="icon-border" />No Lock in contract term</div>
                                    <div><CancelRoundedIcon color="secondary" fontSize="inherit" className="icon-border" />No Hidden Charges</div>
                                    <div><CancelRoundedIcon color="secondary" fontSize="inherit" className="icon-border" />No Sign-up free</div>
                                </Grid>
                                <Grid item xs={6}>
                                    <div><CancelRoundedIcon color="secondary" fontSize="inherit" className="icon-border" />No hefty upfront or integration fee</div>
                                    <div><CancelRoundedIcon color="secondary" fontSize="inherit" className="icon-border" />No annual maintainence contract fee</div>
                                </Grid>
                            </Grid>
                            <Grid container justify={'center'} className="p-t-50">
                                <EmailForm />
                            </Grid>
                        </Grid>
                    </Grid>
                </div>



                <div className="container2">

                    <Grid container justify={'center'}>
                        <Grid item >
                            <div className="why">Why Inkredo ?</div>
                            <Grid container spacing={5} justify="center">
                                <Block header={literals.whyink1} subheader={literals.whyink1text} button={literals.getStarted} />
                                <Grid item xs={5}>
                                    <div className="table-header">Checking Summary</div>
                                    <Table />
                                    <div className="pink-box">{literals.endBalance}</div>
                                </Grid>
                                <Grid item xs={5}>
                                    <StakedBarChart />
                                </Grid>
                                <Block header={literals.whyink2} subheader={literals.whyink2text} button={literals.getStarted} />
                                <Block header={literals.whyink3} subheader={literals.whyink3text} button={literals.getStarted} />
                                <Grid item xs={5}>
                                    <Table3 />
                                    <SteppedLineChart />
                                </Grid>
                                <Grid item xs={5}>
                                    <Table1 />
                                </Grid>
                                <Block header={literals.whyink4} subheader={literals.whyink4text} button={literals.getStarted} />
                                <Block header={literals.whyink5} subheader={literals.whyink5text} button={literals.getStarted} />
                                <Grid item xs={5}>
                                    <Table2 />
                                </Grid>
                                <Grid item xs={5}>
                                    <CodeFormat />
                                </Grid>
                                <Block header={literals.whyink6} subheader={literals.whyink6text} button={literals.getStarted} />
                                <Block header={literals.whyink7} subheader={literals.whyink7text} button={literals.getStarted} />
                                <Grid item xs={5}>
                                    <SteppedLineChart1 />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
                <div className="p-b-30 p-t-30 App-row">
                    <h6 className="subheader1">Sign up now to analyse  <span>25 statements for free </span></h6>
                    <Grid container justify={'center'}>
                        <EmailForm />
                    </Grid>
                </div>
            </>
        )
    }
}



const mapStateToProps = ({ literals }) => ({
    literals
});

export default connect(mapStateToProps)(Home);