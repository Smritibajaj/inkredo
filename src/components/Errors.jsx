import React from 'react';
import { menuItems, borrower, create } from '../i18n/menuItems';
import CodeFormat from './CodeFormat';
import DynamicTable from './DynamicTable';
import CodeHeaders from './CodeHeaders';
import Grid from '@material-ui/core/Grid';

function Errors(props) {
    return (
        <React.Fragment>
            <h2 className="titles">Errors</h2>
            <p className="information m-b-10 m-t-10">The Inkredo API uses the following error codes:</p>
            <Grid item xs={10}>
            <DynamicTable header={[['Error Code', 'Meaning']]} data={[['Content-Type', 'application/json'], ['400', 'Bad Request -- Your request is invalid.'], ['404', 'Not Found -- The specified api/page could not be found.'],['500','Internal Server Error -- We had a problem with our server. Try again later.'],['503',`Service Unavailable -- We're temporarily offline for maintenance. Please try again later.`]]} />
            </Grid>
        </React.Fragment>
    )
}

export default Errors;