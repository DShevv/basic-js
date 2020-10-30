const CustomError = require("../extensions/custom-error");
const seasons = {
  1: 'winter',
  2: 'winter',
  3: 'spring',
  4: 'spring',
  5: 'spring',
  6: 'summer',
  7: 'summer',
  8: 'summer',
  9: 'fall',
  10: 'fall',
  11: 'fall',
  12: 'winter',

}

module.exports = function getSeason(date) {
  if(date instanceof Date && !isNaN(date.valueOf())){
    return seasons[date.getMonth()+1];
  }
  else{
    if(date == null){
      return 'Unable to determine the time of year!';
    }
    else{
      throw 'FAIL';
    }
    
  }
};
