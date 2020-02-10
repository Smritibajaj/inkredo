import React from 'react';
import { menuItems, borrower, create } from '../i18n/menuItems';
import CodeFormat from './CodeFormat';
import DynamicTable from './DynamicTable';
import CodeHeaders from './CodeHeaders';
import Grid from '@material-ui/core/Grid';

function GenerateExcel(props) {
    return (
        <React.Fragment>
            <h2 className="titles">Generate excel report link</h2>
            <p className="information m-b-20 m-t-20">This endpoint provides a link to download the report in excel format. To download the excel file, you can visit the link returned in downloadLink of the response body.</p>
            <h2 className="m-b-20 m-t-20">Http Request</h2>
            <div className="m-b-20 m-t-20"><span className="highlighted">{`POST <URL>/api/v2/parser/excel`}</span></div>
            <Grid item xs={10}>
            <h2 className="m-b-20 m-t-20">Headers</h2>
            <DynamicTable header={[['Name', 'Value']]} data={[['Content-Type', 'application/json'], ['access-id', 'your_access_id'], ['access-key', 'your_access_key']]} />
            </Grid>
            <h2 className="m-b-20 m-t-20">Body</h2>
            <DynamicTable header={[['Parameter', 'Required', 'Description']]} data={[['borrowerId','true', 'borrower ID']]} />
            <CodeHeaders padding={'8px'} bgcolor={'black'} color={'white'} data={[`curl --request GET`]}/>
            <CodeFormat data={create} />
            <CodeHeaders padding={'8px'} bgcolor={'#FFF3DC'} color={'black'} data={[`The downloadLink will expire after 10 minutes`]}  />
        </React.Fragment>
    )
}

export default GenerateExcel;