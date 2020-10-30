const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(diskNumber, turnsSpeed) {
  var turnsNum = (Math.pow(2, diskNumber)-1);
  return {
    turns: turnsNum,
    seconds: Math.floor(turnsNum/(turnsSpeed/3600))
  }
};
