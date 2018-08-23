import React from 'react'
import Title from "/Users/Roger/skills-app/src/Components/Title.js";
import SubTitle from "/Users/Roger/skills-app/src/Components/SubTitle.js";
import { LocalContext } from '/Users/Roger/skills-app/src/Context.js';
import {HorizontalBar} from 'react-chartjs-2';

const options = {
        scales: {
            xAxes: [
              {
                  ticks: {
                     min: 0,
                     max: 5,
                     fixedStepSize: 1
                  }
              }
            ]
        }
};

export default props => (
  <LocalContext.Consumer>
       { localData =>
          <section className="hero is-info">
            <div className="hero-body">
                <div className="column is-6 is-offset-3">

                    <Title title="Your results" />
                    <SubTitle content="Here are some recommendations based on your skills. Some food for thought."/>
                    <HorizontalBar data={localData.chart} options={options} height={260} />

                </div>
            </div>
          </section>
      }
  </LocalContext.Consumer>
)
