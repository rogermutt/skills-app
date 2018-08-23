import React from 'react'
import Title from "/Users/Roger/skills-app/src/Components/Title.js";
import SubTitle from "/Users/Roger/skills-app/src/Components/SubTitle.js";
import Button from "/Users/Roger/skills-app/src/Components/Button.js";
import Error from "/Users/Roger/skills-app/src/Components/Error.js";
import SkillSection from "/Users/Roger/skills-app/src/Components/SkillSection.js";
import { LocalContext } from '/Users/Roger/skills-app/src/Context.js';
import Autocomplete from "/Users/Roger/skills-app/src/Components/AutoComplete.js";

const DB = require("/Users/Roger/skills-app/src/DB.js");

let skillList = [];
DB.map(el=>el.skills).map( arr => arr.map(el=>skillList.push(el)));

skillList = skillList.filter((value, idx, self) => self.indexOf(value) === idx);

export default props => (
  <LocalContext.Consumer>
       {( localData ) => {
         return (
          <section className="hero is-info">
            <div className="hero-body">

                <div className="column is-6 is-offset-3">

                    <Title title="Skills List" />
                    <SubTitle content="Input 5 skills that define your professional profile to find what jobs you could be suitable for."/>

                    <div className="box">
                        <div className="field is-grouped">
                            <div className="control is-expanded">
                                <Autocomplete list={skillList} keyPressHandler={localData.addSkillHandler}/>
                            </div>
                            <p className="control">
                               <a onClick={localData.addSkillHandler} className="button is-info">Find</a>
                            </p>
                        </div>
                    </div>

                </div>

                <div className="column is-6 is-offset-3 submitSkills">
                  <Button clickHandler={localData.submitAllSkillsHandler} target="/display" text="Click" />
                </div>

                <Error/>

                <div className="hero">
                <SkillSection />
              </div>

            </div>
          </section>
        );
      }}
  </LocalContext.Consumer>
)
