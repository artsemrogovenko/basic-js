const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let array = n.toString().split('').map((string)=>Number(string));
  if(n<1000 && n>99){
    let temp = Array.from([
     ""+ array[0]+array[1],
     ""+ array[0]+array[2],
     ""+ array[1]+array[2]]
    ,Number);
    return Math.max(...temp);
  }
  let min =Math.min(...array);
  let indexMinDigit=array.indexOf(min);
    array.splice(indexMinDigit, 1) ;
  return Number(array.join(""));
}

module.exports = {
  deleteDigit
};
