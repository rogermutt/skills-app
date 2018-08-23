import React from 'react'
import SkillCard from './SkillCard.js'
import { LocalContext } from '/Users/Roger/skills-app/src/Context.js';

export default () => {
  return (
    <LocalContext.Consumer>
         {( localData ) => {
           return (
           <div className="columns is-variable is-1">
             {localData.skillsStored.map(skill =>
             <SkillCard key={skill.toString()} skillName={skill} handleClick={localData.removeSkillHandler} />
             )}
           </div>
         );
       }}
    </LocalContext.Consumer>
  );
};
