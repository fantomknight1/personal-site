import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div>
        { this.props.children }
      </div>
    );
  }
}

/*whenever we define nested routes app has to render children. So, we need {this.props.children}*/
