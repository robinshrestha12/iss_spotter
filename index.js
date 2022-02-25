//const {fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes} = require('./iss');
//const {nextISSTimesForMyLocation}=require('./iss');
// fetchMyIP((error,ip) =>{
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }
//   console.log('It worked! Returned IP:' , ip);
// });
//ip:'72.141.73.11'
// fetchCoordsByIP('72.141.73', (error, data) =>{
//   if (error) {
//        console.log("It didn't work!", error);
//      return;
//       }
//    console.log('It worked! Returned Coordinates:' , data);
// });

// const exampleCoords = { latitude: '49.27670', longitude: '-123.13000' };

// fetchISSFlyOverTimes(exampleCoords, (error, passTimes) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

const { nextISSTimesForMyLocation } = require('./iss');
const printPasstimes = function(passTimes) {
  for (const pass of passTimes) {
    const dateTime = new Date(0);
    dateTime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${dateTime} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  printPasstimes(passTimes);
});

