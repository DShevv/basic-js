const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  try {
    const k = 0.693/ HALF_LIFE_PERIOD;
    var help = parseInt(sampleActivity);
    if(Number.isInterger(help)){
      return Math.ceil(parseInt(Math.log(MODERN_ACTIVITY/sampleActivity)/k));
    }
    else{
      return false
    }
    
  } catch (error) {
    return false
  }
};
