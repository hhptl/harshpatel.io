import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://www.shareicon.net/data/128x128/2017/07/11/888365_cookie_512x512.png"
              alt="avatar"
              className="avatar-img"
              />
            <div className="banner-text">
              <h1>Harsh Patel</h1>

            <hr/>

          <p>Software Engineer - Walmart Global Tech</p>

        <div className="social-links">

          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/hhp/" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>

          {/* Github */}
          <a href="https://github.com/harshhp12" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
          </a>

          {/* Email */}
          <a href="mailto:harsh.patel36@outlook.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-envelope-square" aria-hidden="true" />
          </a>

        </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
