import React from 'react';
const JobMatchingEngine = require('/Users/Roger/skills-app/src/JobMatchingEngine.js');
const DB = require("/Users/Roger/skills-app/src/DB.js");
const jobList = DB.map(el => el.role);
const skillsList = DB.map(el => el.skills);

let errorList = {
  invalid: "Avoid numbers, spaces or special characters.",
  existing: "Already input",
  valid: null
}

export const LocalContext = React.createContext();

class LocalProvider extends React.Component {

    state = {
      skillsStored: [],
      showError: null,
      chart: {
        labels: [],
        datasets: [
          {
            label: "Matching skills",
            data: [],
            backgroundColor: ["	#2b5a88", "#4c7394","#6f8ba0","#b0bcba","#d1d5c6"],
          }
        ]
      },

      removeSkillHandler: ev => {

        let skillInButton = ev.target.parentNode.querySelector(".skill-p").innerText;
        let list = this.state.skillsStored;

            list = list.filter(item => item !== skillInButton)

            this.setState({skillsStored: list});
      },

      toUpperCase: input => {
        return input.replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase() )
      },

      isItemInArray: (input, array) => {

        let toTestInput = this.state.toUpperCase(input);
        return array.indexOf(toTestInput) === -1 ? toTestInput : false;

      },

      validateInput: (input, array) => {

        if (/[^a-zA-Z]/.test(input) )
        return "invalid";

        let isItemInDatabase = this.state.isItemInArray(input, array);

        return (isItemInDatabase === false) ? "existing" : null;

      },

      addSkillHandler: ev => {

        if (ev.key === "Enter" || ev.target.innerText === "Find") {

          let itemToCheck = ev.key === "Enter" ?
                            ev.target.value :
                            ev.target.parentNode.parentNode.querySelectorAll("input")[0].value;
                            
          let listToCheck = this.state.skillsStored;

          let anyErrors = this.state.validateInput(itemToCheck, listToCheck);

          if (anyErrors === null) {

              listToCheck.push(itemToCheck);
              let capitalisedList = listToCheck.map(word => this.state.toUpperCase(word));
              this.setState({skillsStored: capitalisedList});
          }

          this.setState({showError: errorList[anyErrors]});

        }

      },

      submitJobHandler: ev => {

        if (ev.key === "Enter" || ev.target.innerText === "Find") {

          let itemToCheck = ev.key === "Enter" ?
                            ev.target.value :
                            ev.target.parentNode.parentNode.querySelectorAll("input")[0].value;

          let itemValid = /[a-zA-Z\sa-zA-Z]+/.test(itemToCheck) ? null : "invalid";

          if (itemValid === null) {
            let idx = jobList.indexOf(itemToCheck);
            if (idx !== -1)
            this.setState({skillsStored: skillsList[idx]});
          }
          this.setState({showError: errorList[itemValid]})
        }
      },

      submitAllSkillsHandler: ev => {

        let result = JobMatchingEngine(this.state.skillsStored);

        let chart = Object.assign({}, this.state.chart);
            chart.labels = result.jobsInOrder;
            chart.datasets[0].data = result.scoresInOrder;
            this.setState({chart});
      }
    }

      render() {
        return (
          <LocalContext.Provider value={this.state}>
            {this.props.children}
          </LocalContext.Provider>
        );
      }
}

export default LocalProvider;
