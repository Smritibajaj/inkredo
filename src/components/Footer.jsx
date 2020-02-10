import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import '../stylesheets/Home.scss';
import logo from '../images/Vector-white.png';
import { Link } from "react-router-dom";
export default class Footer extends Component {
    render() {
        return (
            <div className="background-600">
                    <Grid container className="sub-procedure p-b-30">
                        <Grid item xs={6}>
                            <Grid container spacing={3}>
                                <Grid item xs={6} className="sub-procedure">Contact us at</Grid>
                                <Grid item xs={6}>Email us at</Grid>
                            </Grid>
                            <Grid container spacing={3} className="highlight">
                                <Grid item xs={6}>+91-9873420580</Grid>
                                <Grid item xs={6}>tanmay@inkredo.in</Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={6}>
                            <Grid container spacing={3}>
                            <Grid item xs={4}><Link to={`/home`}>Home</Link></Grid>
                            <Grid item xs={4}><Link to={`/careers`}>Careers</Link></Grid>
                            <Grid item xs={4}><Link to={`/blog`}>Blog</Link></Grid>
                            </Grid>
                            <Grid container spacing={3}>
                                <Grid item xs={4}><Link to={`/api`}>API</Link></Grid>
                                <Grid item xs={4}><Link to={`/legal`}>Legal</Link></Grid>
                                <Grid item xs={4}><Link to={`/home`}>Contact Us</Link></Grid>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid container justify={'center'} className="footer-text">
                    <img alt="inkredo " src={logo} />
                    <div >Inkredo</div>
                    </Grid>
                    <Grid container justify={'center'} className="footer-text">
                    <div className="sub-procedure">© 2019 Zodhana Mobile Solutions Pvt. Ltd.</div>
                    </Grid>
            </div>
        )

    }
}