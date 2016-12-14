import React, { Component } from 'react';
import AboutMe from './about_me';
import Projects from './projects';

class PostsIndex extends Component {
  componentWillMount() {
    console.log('please call an action creator now')
  }

  render() {
    return (
      <div>
        <AboutMe/>
        <Projects/>
      </div>
    );
  }
}

export default PostsIndex;
