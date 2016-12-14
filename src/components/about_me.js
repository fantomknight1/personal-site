import React, { Component } from 'react';

class AboutMe extends Component {
  componentWillMount() {
    console.log('About me component')
  }

  render() {
    return (
      <div className="aboutMe aboutMeOverlay">
            <h2 id="aboutMe_title">About Me</h2>
            <div className="aboutMe_profile_accomplishments">
              <div className="aboutMe_pic_p">
                <img
                  className="aboutMe_profile_pic"
                  src="../style/img/profile_pic.jpg"
                  alt="profile pic"/>
                <p className="aboutMe_p">
                  I am a 27 year old web developer with lots of sales experience and
                  an exceptional track record of meeting goals under time pressure with a
                  focus on maximizing customer satisfaction.
                </p>
              </div>
              <div className="accomplishment_box">
                <h3>Accomplishments</h3>
                <ul className="accomplishments">
                  <li>Best Buy Achiever- Top 2% in the company</li>
                  <li>1000 Dollar Club- Consistently gross over $1,000 an hour</li>
                  <li>150% Club- Achieve 150% Department Target</li>
                  <li>Million Dollar Club- Gross over 1M Dollars in a year</li>
                  <li>3rd Quarter MVP</li>
                  <li>4th Quarter MVP</li>
                </ul>
              </div>
            </div>
            <div className="skillbox">
              <h2 id="skillTitle">Skills</h2>
              <ul className="skill_ul">
                <li className="skill_li"><img className="skillImage" id="css3" src="../style/img/css3.png" alt="css3"/></li>
                <li className="skill_li"><img className="skillImage" id="html5" src="../style/img/html5.png" alt="html5"/></li>
                <li className="skill_li"><img className="skillImage" id="react" src="../style/img/react.png" alt="react"/></li>
                <li className="skill_li"><img className="skillImage" id="javascript" src="../style/img/javascript.png" alt="javascript"/></li>
                <li className="skill_li"><img className="skillImage" id="jquery" src="../style/img/jquery.gif" alt="jquery"/></li>
                <li className="skill_li"><img className="skillImage" id="ruby" src="../style/img/ruby.png" alt="ruby"/></li>
                <li className="skill_li"><img className="skillImage" id="rails" src="../style/img/rails.png" alt="rails"/></li>
                <li className="skill_li"><img className="skillImage" id="nodejs" src="../style/img/nodejs.png" alt="nodejs"/></li>
                <li className="skill_li"><img className="skillImage" id="express" src="../style/img/express.png" alt="express"/></li>
                <li className="skill_li"><img className="skillImage" id="postgresql" src="../style/img/postgresql.png" alt="postgresql"/></li>
                <li className="skill_li"><img className="skillImage" id="photoshop" src="../style/img/photoshop.png" alt="photoshop"/></li>
              </ul>
            </div>
      </div>
    );
  }
}

export default AboutMe;
