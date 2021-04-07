import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src="https://www.shareicon.net/data/128x128/2017/07/11/888365_cookie_512x512.png"
                alt="avatar"
                style={{height: '200px'}}
                 />
            </div>

            <h2 style={{paddingTop: '2em'}}>Harsh Patel</h2>
            <h4 style={{color: 'grey'}}>Software Engineer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Location</h5>
            <p>Metuchen, New Jersey</p>
            <h5>Email</h5>
            <p>harsh.patel@outlook.com</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={2017}
              endYear={2021}
              schoolName="Rutgers University"
              schoolDescription="Bachelor of Science, Computer Science"
               />

          <h2>Experience</h2>

            <Experience
              startYear={2020}
              endYear={2020}
              jobName="3M Health Information Systems"
              jobTitle="Software Engineering Intern"
              jobDescription="Implemented full-stack features for CodeAssist, an NLP-enabled medical coding
              software that allows for team managers to analyze productivity of team members."
              />

              <Experience
                startYear={2019}
                endYear={2021}
                jobName="Rutgers OIT - New Brunswick Computing Services"
                jobTitle="Level 2 Help Desk Consultant"
                jobDescription="Answered phone calls from the university community of students, faculty, and employees to
                provide them with computing support."
                />
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="Java"
                progress={100}
                />
                <Skills
                  skill="HTML/CSS"
                  progress={80}
                  />
                  <Skills
                    skill="JavaScript"
                    progress={50}
                    />
                    <Skills
                      skill="React"
                      progress={25}
                      />


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
