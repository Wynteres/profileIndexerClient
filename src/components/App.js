import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from './layout/header';
import Card from 'react-toolbox/lib/card/Card';
class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Card className="container mt-2 pb-5">          
          {this.props.children}       
        </Card>
      </div>
    );
  }
}
export default App;
