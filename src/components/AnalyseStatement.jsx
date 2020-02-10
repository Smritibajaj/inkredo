import React from 'react';
import { menuItems, borrower, create } from '../i18n/menuItems';
import CodeFormat from './CodeFormat';
import DynamicTable from './DynamicTable';
import CodeHeaders from './CodeHeaders';
import Grid from '@material-ui/core/Grid';

function AnalyseStatement(props) {
    return (
        <React.Fragment>
            <h2 className="titles">Reanalyse bank statement</h2>
            <div className="m-b-20 m-t-20"><span className="highlighted">{`POST <URL>/api/v2/parser/reanalyse/`}</span></div>
            <h2 className="m-b-20 m-t-20">Body</h2>
            <div className="m-b-20 m-t-20"><span className="highlighted">{`{"borrowerId":"5bb20ba98b583b0b9cf1e13b"}`}</span></div>
            <Grid item xs={10}>
            <h2 className="m-b-20 m-t-20">Headers</h2>
            <DynamicTable header={[['Name', 'Value']]} data={[['Content-Type', 'application/json'], ['access-id', 'your_access_id'], ['access-key', 'your_access_key']]} />
            </Grid>
            <h2 className="m-b-20 m-t-20">Response</h2>
            <p>same as the parser api</p>
        </React.Fragment>
    )
}

export default AnalyseStatement;