import React from 'react';
import { menuItems, borrower, create } from '../i18n/menuItems';
import CodeFormat from './CodeFormat';
import DynamicTable from './DynamicTable';
import CodeHeaders from './CodeHeaders';
import Grid from '@material-ui/core/Grid';

function  ParserV1(props) {
    return (
        <React.Fragment>
            <h2 className="titles">Parser V1</h2>
            <p className="information m-b-20 m-t-20">This endpoint parsers and analysis a bank statement.</p>
            <CodeHeaders padding={'8px'} bgcolor={'#FFF3DC'} color={'black'} data={[`Users should switch to a newer version v2!`]}  />
            <h2 className="m-b-20 m-t-20">Http Request</h2>
            <div className="m-b-20 m-t-20"><span className="highlighted">{`POST <URL>/api/v1/parser/`}</span></div>
            <Grid item xs={10}>
            <h2 className="m-b-20 m-t-20">Headers</h2>
            <DynamicTable header={[['Name', 'Value']]} data={[['Content-Type', 'multipart/form-data'], ['access-id', 'your_access_id'], ['access-key', 'your_access_key']]} />
            </Grid>
            <h2 className="m-b-20 m-t-20">Body</h2>
            <DynamicTable header={[['Parameter', 'Required', 'Description']]} data={[['bank','true', 'bank code obtained from supported banks api above'],['statement','true','bank statement file to be analysed'],['borrowerId','true','id of the borrower created earlier'],['pdfPassword','false','password of the pdf']]} />
            <CodeHeaders padding={'8px'} bgcolor={'black'} color={'white'} data={[`curl --request GET`]}/>
            <CodeFormat data={create} />
        </React.Fragment>
    )
}

export default  ParserV1;