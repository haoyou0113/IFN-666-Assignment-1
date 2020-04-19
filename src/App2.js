import React, { Component } from 'react';

class App2 extends Component {
  render() {
    return (
      <div>
        {this.props.children}
        {/* receive all of routers  */}
      </div>
    );
  }
}

export default App2;
