const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let secondString=""+s2;
  let firstGroup= getArray(s1);
  let counter = 0;

  for (const char of firstGroup) {
    if(secondString.includes(char)){
     counter++;
      secondString = secondString.replace(`${char}`,"");
    }
  }

  for (const char of secondString) {
    s1.includes(char)?counter++:null;
  }

  return counter;
}

const getArray = (data) =>{
  let uniqueGroups = [];
  let count = 1;
  let prevChar = data[0];
  for (let i=1;i<data.length;i++) {
    if (prevChar === data[i]) {
      count++;
    } else {
      uniqueGroups.push(prevChar.repeat(count));
      prevChar = data[i];
      count = 1;
    }
    if (i === data.length - 1) {
      count<2 ? uniqueGroups.push(prevChar) : uniqueGroups.push(prevChar.repeat(count));
    }
  }
  return uniqueGroups;
}

module.exports = {
  getCommonCharacterCount
};
