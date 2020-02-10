import React from 'react';
import Grid from '@material-ui/core/Grid';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
const Block = (props) => {
    const { header, subheader, button} = props;
    return(
        <Grid item xs={5}>
        <div className="procedure">{header}</div>
        <div className="sub-procedure">{subheader}</div>
        <div className="get-started">{button}<ArrowRightAltIcon/></div>
        </Grid>
    )
} 

export default Block;
