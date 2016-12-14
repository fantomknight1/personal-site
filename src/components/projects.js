import React, { Component } from 'react';

class Projects extends Component {
  componentWillMount() {
    console.log('This is my projects')
  }

  render() {
    return (
      <div className="projects">
        <h3 id="projects_title">Projects</h3>
        <div id="all_projects">
          <div className="hover panel">
            <div className="projects_panel front poliChange">
              <h4 id="polichange_title">PoliChange</h4>
              <div id="polichange_info">
                <a id="polichange_image" href="https://polichange.herokuapp.com/">
                  <div id="poliChangeLogoDiv">
                    <h2 id="poliChangeLogo">P¢ </h2>
                  </div>
                </a>
                <p id="polichange_p">
                  This is an app that seeks to give users the ability
                  to search for various politicians and get back data on who is
                  donating to them.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
