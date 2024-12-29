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
  if(!Array.isArray(arr)){
    throw new Error('\'arr\' parameter must be an instance of the Array!');
  }
  const isCommand=(string)=>{
    let c = ["--discard-prev","--double-prev","--double-next","--discard-next"];
    return c.includes(string);
  }

  let commandsCount=arr.filter((value)=>typeof value==="string").length ;
  let stack = []
  for (let i = 0; i < arr.length; i++) {
    let element = arr[i];
    stack.push(element);
    if(typeof element === "string") {

      if(isCommand(element)){
      stack.pop();
      }

      switch (element) {
        case  "--double-next":
          if (arr[i + 2] === "--double-prev") {
            stack.push(arr[i+1]);
            stack.push(arr[i+1]);
            stack.push(arr[i+1]);
          }
          if(arr[i + 2] === "--discard-prev"){
            stack.push(arr[i+1]);
          }
          i = i + 1;
          break;
        case "--discard-next":
          if(commandsCount===2) {
          i = i + 1;
        }  break;
        default:    break;
      }
    }

  }
return stack;
}

module.exports = {
  transform
};
