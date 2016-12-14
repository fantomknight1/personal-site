import React, { Component } from 'react';

class Header extends Component {
  componentWillMount() {
    console.log('Header')
  }

  render() {
    return (
      <header >
        <div className="header">
          <div className="topHeader">
            <h2 className="title">Viorel Belfiore</h2>
          </div>
          <div className="bottomHeader">
            <ul className="links_ul">
              <li className="links_li" id="email">belfiore.viorel@gmail.com</li>
              <li className="links_li" id="phone">609-577-7626</li>
              <li className="links_li links_li2"><a href="https://www.linkedin.com/in/fantomknight1">
                <img id="linkedin" src="../style/img/linkedin.png" alt="linkedin"/>
              </a></li>
              <li className="links_li links_li2"><a href="https://github.com/fantomknight1">
                <img id="github" src="../style/img/github.png" alt="github"/>
              </a></li>
            </ul>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
