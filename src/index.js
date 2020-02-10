import 'react-app-polyfill/ie11';
import React from "react";
import ReactDOM from "react-dom";
import './stylesheets/index.scss'
import { Provider } from "react-redux";
import Security from './components/Security';
import Blog from './components/Blog';
import Careers from './components/Careers';
import Api from './components/Api';
import App from "./App";
import { loadLiterals } from './actions/lang.action';
import store from "./store";
import loadLang from "./i18n";
import { Switch, Route, BrowserRouter, Redirect, withRouter } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';

loadLang().then(lang => store.dispatch(loadLiterals(lang)));

const Index = (props) => {
  const { location } = props;
  const api = location.pathname === '/api' ? false: true;
  return (
   <React.Fragment>
      <div>
       {api && <Header />}
        </div>
      <Switch>
        <Route path={`/`} exact component={App} />
        <Route path={`/home`} exact component={App} />
        <Route path={`/security`} component={Security} />
        <Route path={`/blog`} component={Blog} />
        <Route path={`/careers`} component={Careers} />
        <Route path={`/api`} component={Api} />
      </Switch>
      <Redirect to='/home' />
      {api && <Footer />}
    </React.Fragment>
  )
}

const IndexWithRouter =  withRouter(Index);

ReactDOM.render(
  <Provider store={store}> <BrowserRouter><IndexWithRouter /></BrowserRouter></Provider> ,
  document.getElementById("root")
);