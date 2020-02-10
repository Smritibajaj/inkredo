import React from "react";
import { connect } from "react-redux";
import Home from './components/Home';

class App extends React.Component {
  render() {
    return (
      <Home />
    );
  }
}


const mapStateToProps = ({ literals }) => ({
  literals
});

export default connect(mapStateToProps)(App);