const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {

  if(options.hasOwnProperty("addition")){
    let additionStr= myComposer(options.addition,options.additionRepeatTimes,options.additionSeparator);

    let result = myComposer(str,options.repeatTimes,options.separator,additionStr);

    return result;
  }

  if(options.hasOwnProperty("separator")){
    return myComposer(str,options.repeatTimes,options.separator);
  }else {
   return Array.from({length:options.repeatTimes},(v,i) => str).join("+");
  }
}

function myComposer(string,repeatTimes=1,separator="",additional=""){
    return Array.from({ length: repeatTimes }, function (v, index) {
      if (index < repeatTimes-1) {
        return string + additional +separator;
      }
      return string + additional;
    }).join("");
}

module.exports = {
  repeater
};
