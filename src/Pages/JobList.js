import React from 'react'
import Title from "/Users/Roger/skills-app/src/Components/Title.js";
import SubTitle from "/Users/Roger/skills-app/src/Components/SubTitle.js";
import SkillSection from "/Users/Roger/skills-app/src/Components/SkillSection.js";
import { LocalContext } from '/Users/Roger/skills-app/src/Context.js';
import Error from "/Users/Roger/skills-app/src/Components/Error.js";
import Autocomplete from "/Users/Roger/skills-app/src/Components/AutoComplete.js";

const DB = require("/Users/Roger/skills-app/src/DB.js");
const jobs = DB.map(el => el.role);

export default props => (
  <LocalContext.Consumer>
       { localData  => {
         return (
           <section className="hero is-info">
             <div className="hero-body">
                 <div className="column is-6 is-offset-3">

                     <Title title="Job List" />
                     <SubTitle content="What role are you interested in? Find out the key skills the market is demanding."/>

                     <div className="box">
                         <div className="field is-grouped">
                             <div className="control is-expanded">
                                <Autocomplete list={jobs} keyPressHandler={localData.submitJobHandler}/>
                             </div>
                             <p className="control">
                                <a onClick={localData.submitJobHandler} className="button is-info">Find</a>
                             </p>
                         </div>
                     </div>

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
