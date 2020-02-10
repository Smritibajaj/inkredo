import React from 'react';
import { connect } from "react-redux";
import Grid from '@material-ui/core/Grid';
import '../stylesheets/Security.scss';
const Security = (props) => {
    const { literals } = props;
    return (
        <div>
            <div className="why">{literals.security}</div>
            <Grid container justify={'center'} className="container text">
                <Grid item xs={12} sm={6} >
                    <p className="text">{literals.securityMsg1}</p>
                    <li>{literals.securityMsg2}</li>
                    <li>{literals.securityMsg3}</li>
                    <li>{literals.securityMsg4}</li>
                </Grid>
            </Grid>

            <Grid container justify={'center'} className="container text">
                <Grid item xs={12} sm={6} >
                    <h4 className="sub-head">{literals.securityHeading}</h4>
                    <li>{literals.securityMsg5}</li>
                    <li>{literals.securityMsg6}</li>
                </Grid>
            </Grid>

            <Grid container justify={'center'} className="container text">
                <Grid item xs={12} sm={6} className="grey-box">
                    <div>{literals.securityMsg7}</div>
                </Grid>
            </Grid>
        </div>
    )
}


const mapStateToProps = ({ literals }) => ({
    literals
});

export default connect(mapStateToProps)(Security);