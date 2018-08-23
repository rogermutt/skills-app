import React from 'react'
import { LocalContext } from '/Users/Roger/skills-app/src/Context.js';


export default props => {
  return (
    <LocalContext.Consumer>
         {( localData ) => {
           return (
             <div className="column is-one-fifth ">
               <article className="message is-primary">
                 <div className="message-header skillcard">
                   <p className="skill-p">{props.skillName}</p>
                   <button onClick={localData.removeSkillHandler} className="delete" aria-label="delete"></button>
                 </div>
               </article>
             </div>
         );
       }}
       </LocalContext.Consumer>
  )
};
