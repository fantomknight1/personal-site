import React, { Component } from 'react';

class Footer extends Component {
  componentWillMount() {
    console.log('Footer')
  }

  render() {
    return (
      <div className="footer">
        <ul className="footer_ul">
          <li className="footer_li" id="footer_email">belfiore.viorel@gmail.com</li>
          <li className="footer_li"><a href="https://www.linkedin.com/in/fantomknight1">
            <img id="footer_linkedin" src="../style/img/linkedin.png" alt="linkedin"/>
          </a></li>
        <li className="footer_li"><a href="https://github.com/fantomknight1">
            <img id="footer_github" src="../style/img/github.png" alt="github"/>
          </a></li>
        <li className="footer_li" id="footer_phone">609-577-7626</li>
        </ul>
      </div>
    );
  }
}

export default Footer;
