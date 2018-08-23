import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Landing from "/Users/Roger/skills-app/src/Pages/Landing.js";
import Skills from "/Users/Roger/skills-app/src/Pages/Skills.js";
import Chart from "/Users/Roger/skills-app/src/Pages/Chart.js";
import JobList from "/Users/Roger/skills-app/src/Pages/JobList.js";

export default () => (
  <main>
    <Switch>
      <Route path="/landing" render={ (props) => <Landing title={"Welcome"} /> } />
      <Route path="/joblist" render={ (props) => <JobList title={"Jobs"} /> }  />
      <Route path="/skills" render={  (props) => <Skills title={"Skills"} /> }  />
      <Route path="/display" render={ (props) => <Chart title={"Chart"} /> }  />
    </Switch>
  </main>
)
