import React, { Component } from 'react';
import Header from './header';
import Footer from './footer';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <div>{ this.props.children }</div>
        <Footer/>
      </div>
    );
  }
}

/*whenever we define nested routes app has to render children. So, we need {this.props.children}*/
