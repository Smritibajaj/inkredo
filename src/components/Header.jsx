import React from 'react';
import { connect } from "react-redux";
import logo from '../images/Vector.png';
import '../stylesheets/Header.scss';
import Grid from '@material-ui/core/Grid';
import { NavLink, withRouter } from "react-router-dom";

function Header(props) {
  const { location, literals } = props;
  const headerColor = location.pathname === '/home' ? { background: '#F2F5FE' } : { background: 'white' }
  return (
    <Grid container alignItems="center" spacing={2} justify="center" style={headerColor} className="App">
      <Grid container item sm={3} md={2} wrap="nowrap" alignItems="center" className="logo">
        <img src={logo} />
        <h6 className="Logo-text">{literals.app_name}</h6>
      </Grid>
      <Grid container item sm={5} md={5} wrap="nowrap" alignItems="center" className="navigator">
        <NavLink to={`/home`} activeClassName="active"><div>{literals.home}</div></NavLink>
        <NavLink to={`/api`} activeClassName="active"><div>{literals.api}</div></NavLink>
        <NavLink to={`/careers`} activeClassName="active"><div>{literals.careers}</div></NavLink>
        <NavLink to={`/blog`} activeClassName="active"><div>{literals.blog}</div></NavLink>
        <NavLink to={`/security`}><div>{literals.security}</div></NavLink>
      </Grid>
      <Grid container item sm={4} md={3} wrap="nowrap" alignItems="center" className="appbutton">
        <button style={headerColor}>{literals.login}</button>
        <button style={headerColor}>{literals.signup}</button>
      </Grid>
    </Grid>
  )
}


const mapStateToProps = ({ literals }) => ({
  literals
});

export default withRouter(connect(mapStateToProps)(Header));