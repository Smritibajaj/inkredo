import React from 'react';

function Authentication(props) {
    return (
        <React.Fragment>
        <h1 className="titles" >Authentication</h1>
              <div className="information">
                <p>Inkredo uses API keys to allow access to the API. You can register a new Inkerdo API key at our main webapp. After completing the KYC process and subscribing to our services, you can go to the settings page and obtain the keys from the api section</p>
                <p>Inkredo expects the API key to be included in all API requests to the server in a header that looks like the following:</p>
                <div className=" m-b-5 m-t-5"><span className="highlighted">access-id: your_access_id</span></div>
                <div className="m-b-5 m-t-5"><span className="highlighted">access-key: your_access_key</span></div>
                <div>You must replace your_access_id and your_access_key with your personal access-key and access-id.</div>
              </div>
        </React.Fragment>
    )
}

export default Authentication;