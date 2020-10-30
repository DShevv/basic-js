const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  var sum = 0;
  matrix.forEach(element => {
    element.forEach(elem => {
      if (elem == '^^') {
        sum++;
      }
    })    
  });
  return sum;
};
