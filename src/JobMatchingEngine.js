
const DB = require("/Users/Roger/skills-app/src/DB.js");

module.exports = input => {

  let skillsProvidedSorted = input.sort();

  let jobList = DB.map(el => el.role);
  let skillsList = DB.map(el => el.skills).map(el => el.sort());

  const counter = (currentArr, selectedSkills) => currentArr.reduce((accumulator, currentValue, idx) => {
      let num = currentValue === selectedSkills[idx] ? 1 : 0;
      return accumulator + num;
  }, 0);

  let roleScores = skillsList.map(arr => counter(arr, skillsProvidedSorted));

  let scoresInObj = jobList
  .map((el,idx) => {
     let obj = {};
      obj.role = el;
      obj.score = roleScores[idx];
    return obj;
  })
  .sort((a, b) => b.score - a.score);

  let firstFiveResults = scoresInObj.slice(0, 5);

  let jobsInOrder = firstFiveResults.map(el => el.role)
  let scoresInOrder = firstFiveResults.map(el => el.score)

  let result = {
    jobsInOrder: jobsInOrder,
    scoresInOrder: scoresInOrder
  };

  return result;

};
