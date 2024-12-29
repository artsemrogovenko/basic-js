const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if(!Array.isArray(members)){
    return false;
  }
  let filtered = members.filter((value) => typeof value === "string");
  let firstLetters = filtered.map((str)=> str.trim().toUpperCase()[0]);
  let groups = {};

  for (const letter of firstLetters) {
    let charCode = letter.charCodeAt(0);

    if(groups.hasOwnProperty(charCode)){
      groups[charCode]=letter+groups[charCode];
    }else {
      groups[charCode]=letter;
    }

  }
  return Object.values(groups).join("");
}

module.exports = {
  createDreamTeam
};
