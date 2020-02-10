import React from 'react';

function Introduction(props) {
    return (
        <React.Fragment>
        <h1 className="titles">Introduction</h1>
        <div className="information">
            <p>Welcome to the Inkredo API! You must be a premium customer to use the api</p>
        </div>
        </React.Fragment>
    )
}

export default Introduction;