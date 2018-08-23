import React from 'react';
import { LocalContext } from '/Users/Roger/skills-app/src/Context.js';
import Autocomplete from "/Users/Roger/skills-app/src/Components/AutoComplete.js";

export default props => (

    <LocalContext.Consumer>
         {( localData ) => {
           return (
             <div className="box">
                 <div className="field is-grouped">

                       <Autocomplete/>

                     <p className="control">
                        <a onClick={localData.submitJobHandler} className="button is-info">{props.text}</a>
                     </p>
                 </div>
             </div>
         );
       }}
       </LocalContext.Consumer>

)
