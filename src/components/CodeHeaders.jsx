import React from 'react';

export default function CodeHeaders(props) {

    return (
        <div className="m-b-30 m-t-30">
            <div style={{ padding: props.padding, backgroundColor: props.bgcolor, color: props.color }}>{props.data}</div>
        </div>
    )
}