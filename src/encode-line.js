const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (str.length<2){
    return str;
  }
  let tempArray = [];
  let count = 1;
  let prevChar = null;
  for (let i=0;i<str.length;i++) {
    if (prevChar === str[i]) {
      count++;
    } else {
     if(count<2){
       if(prevChar !==null)
       tempArray.push(`${prevChar}`);
     }else {
       tempArray.push(`${count}${prevChar}`);
     }
      prevChar = str[i];
      count = 1;
    }
      if (i === str.length - 1) {
        count<2 ? tempArray.push(`${prevChar}`) : tempArray.push(`${count}${prevChar}`);
      }
  }
  return tempArray.join("");
}

module.exports = {
  encodeLine
};
