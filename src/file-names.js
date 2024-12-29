const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let renamedFiles=[...names];
  let uniqueNames = new Set([...names]);


  const getMatches=function (word,arr){
    let index = arr.indexOf(word);

    let matchesIndexes = [];
    while (index!= -1){
      matchesIndexes.push(index);
      index = arr.indexOf(word, index + 1);
    }
    return matchesIndexes;
  }

  for (const uniqueName of uniqueNames) {

    let doubles=getMatches(uniqueName,renamedFiles) ;

    if(doubles.length>0){
      for (let i = 1; i< doubles.length;i++){
        let currentIndex = doubles[i];
        let newName = renamedFiles[currentIndex]+`(${i})`;

        if(getMatches(newName,renamedFiles).length >0){
          renamedFiles[renamedFiles.indexOf(newName)] = newName+`(${i})`;
        }
        renamedFiles[currentIndex]=newName;
    }

    }

  }

  return  renamedFiles;
}

module.exports = {
  renameFiles
};
