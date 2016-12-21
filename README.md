# ReduxSimpleStarter

Interested in learning [Redux](https://www.udemy.com/react-redux/)?

###Getting Started###

There are two methods for getting started with this repo.

####Familiar with Git?#####
Checkout this repo, install dependencies, then start the gulp process with the following:

```
	> git clone git@github.com:StephenGrider/ReduxSimpleStarter.git
	> cd ReduxSimpleStarter
	> npm install
	> npm start
```

####Not Familiar with Git?#####
Click [here](https://github.com/StephenGrider/ReactStarter/releases) then download the .zip file.  Extract the contents of the zip file, then open your terminal, change to the project directory, and:

```
	> npm install
	> npm start
```




Random junk that I deleted.  

FROM index.html:

	<link rel="stylesheet" href="https://cdn.rawgit.com/twbs/bootstrap/v4-dev/dist/css/bootstrap.css">


	import React, { Component } from 'react';

	class AboutMe extends Component {
	  componentWillMount() {
	    console.log('About me component')
	  }

	  render() {
	    return (
	      <div className="aboutMe">
	        <div className="parallax_group">
	          <div className="aboutMe_parallax_layer aboutMe_parallax_base">
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
	              <h5>Skills</h5>
	              <ul className="skill_ul">
	                <li className="skill_li">Javascript ~ </li>
	                <li className="skill_li">JQuery ~ </li>
	                <li className="skill_li">React ~ </li>
	                <li className="skill_li">Html5 ~ </li>
	                <li className="skill_li">CSS3 ~ </li>
	                <li className="skill_li">Ruby ~ </li>
	                <li className="skill_li">Ruby on Rails ~ </li>
	                <li className="skill_li">Node.JS ~ </li>
	                <li className="skill_li">Express ~ </li>
	                <li className="skill_li">PostgreSQL ~ </li>
	                <li className="skill_li">Photoshop ~ </li>
	              </ul>
	            </div>
	          </div>
	          <div className="aboutMe_parallax_layer aboutMe_parallax_back">
	            <img
	              className="aboutMe_back_image aboutMe_back_image1"
	              src="../style/img/css3.png"
	              alt="neil css3" />
	            <img
	              className="aboutMe_back_image aboutMe_back_image2"
	              src="../style/img/html5.png"
	              alt="html5" />
	          </div>
	          <div className="aboutMe_parallax_layer aboutMe_parallax_back2">
	            <img
	              className="aboutMe_back_image aboutMe_back2_image1"
	              src="../style/img/javascript.png"
	              alt="javascript" />
	            <img
	              className="aboutMe_back_image aboutMe_back2_image2"
	              src="../style/img/ruby.png"
	              alt="ruby" />
	          </div>
	          <div className="aboutMe_parallax_layer aboutMe_parallax_back3">
	            <img
	              className="aboutMe_back_image aboutMe_back3_image1"
	              src="../style/img/react.png"
	              alt="react" />
	            <img
	              className="aboutMe_back_image aboutMe_back3_image2"
	              src="../style/img/incredibles.png"
	              alt="incredibles" />
	            <img
	              className="aboutMe_back_image aboutMe_back3_image3"
	              src="../style/img/nodejs.png"
	              alt="nodejs" />
	            <img
	              className="aboutMe_back_image aboutMe_back3_image4"
	              src="../style/img/postgresql.png"
	              alt="batman" />
	          </div>
	        </div>
	      </div>
	    );
	  }
	}




	.parallax_group {
	  position: relative;
	  height: 100vh;
	  transform-style: preserve-3d;
	}

	.aboutMe_parallax_layer {
	  position: absolute;
	  top: 0;
	  left: 0;
	  right: 0;
	  bottom: 0;
	}

	.aboutMe_back_image1 {
	  width: 150px;
	  height: 200px;
	  margin-left: 80px;
	  margin-top: 200px;
	  position: absolute;
	}

	.aboutMe_back_image2 {
	  margin-top: 300px;
	  margin-left: 750px;
	  width: 300px;
	  height: 300px;
	}

	.aboutMe_parallax_back {
	  width: 100vw;
	  background-size: auto 100%;
	  background-repeat: no-repeat;
	  background-position: left top;
	  transform: translateZ(-2px) scale(2);
	  z-index: 3;
	}

	.aboutMe_back2_image1 {
	  width: 294px;
	  height: 165px;
	  margin-left: 80px;
	  margin-top: 500px;
	  position: absolute;
	}

	.aboutMe_back2_image2 {
	  margin-top: 300px;
	  margin-left: 350px;
	  width: 300px;
	  height: 300px;
	}

	.aboutMe_parallax_back2 {
	  margin-top: -400px;
	  width: 100vw;
	  background-size: auto 100%;
	  background-repeat: no-repeat;
	  background-position: left top;
	  transform: translateZ(-5px) scale(2);
	  z-index: 2;
	}

	.aboutMe_back3_image1 {
	  width: 344px;
	  height: 400px;
	  margin-left: 500px;
	  margin-top: 300px;
	  position: absolute;
	}

	.aboutMe_back3_image2 {
	  margin-top: 200px;
	  margin-left: 950px;
	  width: 450px;
	  height: 320px;
	}

	.aboutMe_back3_image3 {
	  margin-left: -50px;
	  margin-bottom: 200px;
	  width: 250px;
	  height: 205px;
	}

	.aboutMe_back3_image4 {
	  margin-top: 200px;
	  width: 250px;
	  height: 205px;
	}

	.aboutMe_parallax_back3 {
	  margin-top: -400px;
	  width: 100vw;
	  background-size: auto 100%;
	  background-repeat: no-repeat;
	  background-position: left top;
	  transform: translateZ(-8px) scale(2);
	  z-index: 1;
	}

	export default AboutMe;







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
