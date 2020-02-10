import React from 'react';
import { menuItems, borrower, create } from '../i18n/menuItems';
import CodeFormat from './CodeFormat';
import DynamicTable from './DynamicTable';
import CodeHeaders from './CodeHeaders';
import Grid from '@material-ui/core/Grid';

function SupportBanks(props) {
    return (
        <React.Fragment>
            <h2 className="titles">Support Banks</h2>
            <p className="information m-b-20 m-t-20">This endpoint retrieves a list of all banks with information on the file type currently supported.</p>
            <h2 className="m-b-20 m-t-20">HTTP Request</h2>
            <div className=" m-b-20 m-t-20"><span className="highlighted">POST URL /api/v2/dashboard/create_borrower</span></div>
            <Grid item xs={10}>
            <h2 className="m-b-20 m-t-20">Headers</h2>
            <DynamicTable header={[['Name', 'Value']]} data={[['Content-Type', 'application/json'], ['access-id', 'your_access_id'], ['access-key', 'your_access_key']]} />
            </Grid>
            <CodeFormat data={borrower} />
        </React.Fragment>
    )
}

export default SupportBanks;