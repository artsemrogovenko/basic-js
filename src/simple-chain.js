const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if(position>this.chain.length || position < 1 || typeof position !== "number"){
      this.chain=[];
      throw new Error("You can't remove incorrect link!");
    }
    let deleteIndex = -1;
    isNaN(position) ?
        deleteIndex = this.chain.indexOf(position) :
        deleteIndex = position-1;

    if(deleteIndex < 0 ){
      throw new Error("You can't remove incorrect link!");
    }
    this.chain.splice(deleteIndex,1);
    return this;
  },
  reverseChain() {
    this.chain= this.chain.reverse();
    return this;
  },
  finishChain() {
    let finished = this.chain.join("~~");
    this.chain=[];
    return finished;
  }
};

module.exports = {
  chainMaker
};
