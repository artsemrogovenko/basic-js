const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  let array= Array.from(arr);
  if(typeof arr==="boolean"){
console.log(array);
  }
  return array;
  let prov=arr.filter((value)=>typeof value==="string").length ;
  console.log(prov);
  for (let i = 0; i < arr.length; i++) {
    let element = arr[i];
    if(typeof element =="string"){
      switch (element) {
        case "--double-next":break;
        case "--double-prev":break;
          case "--discard-next":break;
          case "--discard-prev":break;
      }
    }
  }

}

module.exports = {
  transform
};
