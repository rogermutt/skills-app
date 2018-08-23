import React from 'react';
import { LocalContext } from '/Users/Roger/skills-app/src/Context.js';


export default props => (

    <LocalContext.Consumer>
         {( localData ) => {
           return (
             <div className="box">
                 <div className="field is-grouped">
                     <p className="control is-expanded">
                         <input onKeyPress={localData.addSkillHandler} className="input" type="text" placeholder={props.placeholder}/>
                     </p>
                     <p className="control">
                        <a onClick={localData.addSkillHandler} className="button is-info">{props.text}</a>
                     </p>
                 </div>
             </div>
         );
       }}
       </LocalContext.Consumer>

)
