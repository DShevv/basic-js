const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if(Array.isArray(members)){
    var letArr = [];
    for (let index = 0; index < members.length; index++) {
      if(typeof members[index] == 'string'){
        letArr.push(members[index].replace(/ /g, '')[0].toUpperCase());
      }
    }
    
    return letArr.sort().join('');
  }
  else{
    return false;
  }
  
};
