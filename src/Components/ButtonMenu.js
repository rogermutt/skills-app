import React from 'react'
import { Link } from 'react-router-dom';
import { LocalContext } from '/Users/Roger/skills-app/src/Context.js';

export default props => (
  <LocalContext.Consumer>
       { localData  =>
           <div className="control has-text-centered">
             <Link onClick={props.clickHandler} className="button is-primary is-rounded is-medium" to={props.target}>{props.text}</Link>
           </div>
      }
  </LocalContext.Consumer>
)
