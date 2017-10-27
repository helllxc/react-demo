import React, { Component } from 'react';
import './App.css';
import './components/common/css/common.css'
import Xheader from './components/common/Xheader/Xheader'
class App extends Component {
  render() {
    return (
      <div className="App">
      		<Xheader></Xheader>
          {this.props.children}
      </div>
    );
  }
}

export default App;
