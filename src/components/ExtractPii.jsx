import React from 'react';
import { menuItems, borrower, create } from '../i18n/menuItems';
import CodeFormat from './CodeFormat';
import DynamicTable from './DynamicTable';
import CodeHeaders from './CodeHeaders';
import Grid from '@material-ui/core/Grid';

function ExtractPii(props) {
    return (
        <React.Fragment>
            <h2 className="titles">Extract Pii</h2>
            <p className="information m-b-20 m-t-20">This endpoint is for extracting PII from a bank statement. PII includes information like client's account number, IFSC, etc.</p>
            <h2 className="m-b-20 m-t-20">Http Request</h2>
            <div className="m-b-20 m-t-20"><span className="highlighted">{`POST <URL>/api/v2/extract_pii`}</span></div>
            <Grid item xs={10}>
            <h2 className="m-b-20 m-t-20">Headers</h2>
            <DynamicTable header={[['Name', 'Value']]} data={[['Content-Type', 'multipart/form-data'], ['access-id', 'your_access_id'], ['access-key', 'your_access_key']]} />
            </Grid>
            <h2 className="m-b-20 m-t-20">Body</h2>
            <DynamicTable header={[['Parameter', 'Required', 'Description']]} data={[['pdf','true', 'PDF file object']]} />
            <CodeHeaders padding={'8px'} bgcolor={'black'} color={'white'} data={[`curl --request GET`]}/>
            <CodeFormat data={create} />
        </React.Fragment>
    )
}

export default ExtractPii;