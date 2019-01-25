import React, { Component } from 'react';
import Content from './content';
import PropTypes from 'prop-types';

class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired
  };



  render() {

    const {children} = this.props;

    return (
      <div className="App">
        <div className="row mt-5">
          <div className="col-8">
            <Content body={children}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
