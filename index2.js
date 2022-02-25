//importing iss_promised.js and printPasstimes functions

const {nextISSTimesForMyLocation} = require('./iss_promised');
//const {printPasstimes} = require('./index');
const printPasstimes = function(passTimes) {
  for (const pass of passTimes) {
    const dateTime = new Date(0);
    dateTime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${dateTime} for ${duration} seconds!`);
  }
};
//call
nextISSTimesForMyLocation()
  .then((passTimes) => {
    printPasstimes(passTimes);
  })
  .catch((error) => { //error handling
    console.log("It didn't work: ", error.message);
  });

