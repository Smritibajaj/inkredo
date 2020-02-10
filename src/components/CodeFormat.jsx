import React from 'react';
import ReactJson from 'react-json-view'

export default function CodeFormat(props)  {
   
        return (
            <div className="m-b-30 m-t-30">
                <ReactJson style={{ padding: '20px'}} displayDataTypes={false} theme="solarized" src={props.data ? props.data : {"firstName": "John","lastName": "Smith"}} />
            </div>
        )
}