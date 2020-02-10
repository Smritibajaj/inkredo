import React from 'react';

const EmailForm = () => {
return(
    <form noValidate autoComplete="off">
        <input name="email" type="email" placeholder="Enter your email" className="inputbox"/>
        <button variant="contained" color="primary" className="input-feild">Get Started</button>
    </form>
) 
}

export default EmailForm;
