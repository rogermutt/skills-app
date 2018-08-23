import React from 'react'
import Title from "/Users/Roger/skills-app/src/Components/Title.js";
import ButtonMenu from "/Users/Roger/skills-app/src/Components/ButtonMenu.js";

export default props => (
  <div className="notification">

    <div className="container is-fluid">
      <div className="notification">
        <Title title={props.title} />
      </div>
    </div>

    <div className="columns is-multiline">
      <div className="column is-half">
        <h2 className="subtitle"><span>Your dreamt job</span></h2>
        Explore what skills are required when applying for certain roles and job titles. Up your interviewing game.
      </div>
      <div className="column is-half">
        <h2 className="subtitle"><span>Your skillset</span></h2>
       Find out what job roles are most suitable for your profile. Results tailored to your specifc skillset.
      </div>
      <div className="column is-half ">
        <ButtonMenu target="joblist" text="Jobs Explorer" />
      </div>
      <div className="column is-half">
        <ButtonMenu target="skills" text="Skills Explorer" />
      </div>
      <div className="column">
      </div>
    </div>

  </div>
)
