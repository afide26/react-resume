import React, { Component } from 'react';


class Resume extends Component {
  render() {
    if(this.props.data){
      var education = this.props.data.education.map((edu)=>{
        return(
          <div key={edu.school} className="twelve columns">
            <h3>{edu.school}</h3>
            <p className="info">{edu.degree}<span>&bull;</span><em className="date">{edu.graduated}</em></p>
            <p>{edu.description}</p>
          </div>
        )
      });
      var work = this.props.data.work.map((job)=>{
        return(
          <div key={job.company} className="twelve columns">
            <h3>{job.company}</h3>
            <p className="info">{job.title}<span>&bull;</span><em className="date">{job.years}</em></p>
            <p>{job.description}</p>
          </div>
        )
      });
      var skills = this.props.data.skills.map((skill)=>{
        var className = 'bar-expand ' + skill.name.toLowerCase();
        return(
           <li key={skill.name}><span style={{width:skill.level}} className={className}></span><em>{skill.name}</em></li>
        )
      });
    }
    return (
      <div>
        <section id="resume">
           <div className="row education">
              <div className="three columns header-col">
                 <h1><span>Education</span></h1>
              </div>
              <div className="nine columns main-col">
                 <div className="row item">
                    {education}
                 </div>
              </div>
           </div>
           <div className="row work">
              <div className="three columns header-col">
                 <h1><span>Work</span></h1>
              </div>
              <div className="nine columns main-col">
                 <div className="row item">
                  {work}
                 </div>
              </div>
           </div>


           <div className="row skill">

              <div className="three columns header-col">
                 <h1><span>Skills</span></h1>
              </div>

              <div className="nine columns main-col">
                 <p>
                   My skills are varied, yet purpose-driven. Every skill I have acquired were fruits of the
                   countless number of hours spent in educating myself daily. I believe that we live in exciting times
                   where one can continually improve ourselves through learning incessantly. Learning is my passion, mastery is my
                   targeted destination.
                 </p>
     				<div className="bars">
              <ul className="skills">
                {skills}
              </ul>
     				</div>
     			</div>
           </div>
        </section>
      </div>
    );
  }
}

export default Resume;
