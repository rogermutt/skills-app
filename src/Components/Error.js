import React from 'react'
import { LocalContext } from '/Users/Roger/skills-app/src/Context.js';

export default props => (
    <LocalContext.Consumer>
         { localData =>
           <div className="control has-text-centered error-message"> {localData.showError} </div>
         }
    </LocalContext.Consumer>
)
