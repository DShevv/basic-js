const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw 'ERROR'
  }
  var cock = []
  for (let index = 0; index < arr.length; index++) {
    if (typeof arr[index] == 'string') {
      if(arr[index].split('-')[2] == 'discard'){
        if (arr[index].split('-')[3] == 'prev') {
          if(index != 0){
            cock[index-1] = null;
            cock.push(null);
          }
          else{
            cock.push(null);
          }           
        }
        else{
          cock.push(null);
          cock.push(null);
          index++;
        }
      }
      else{
        if (arr[index].split('-')[3] == 'prev') {
          if(index != 0 && cock[index-1] != null){
            cock.push(arr[index-1]);
          }
          else{
            cock.push(null);
          }
        }
        else{
          if(index != arr.length-1){
            cock.push(arr[index+1]);
          }
          else{
            cock.push(null);
          }
        }
      }
    }
    else{
      cock.push(arr[index]);   
    }
    
  }
  var final = [];
  cock.forEach(element => {
    if (element != null) {
      final.push(element);
    }
  });
    

  return final
};
