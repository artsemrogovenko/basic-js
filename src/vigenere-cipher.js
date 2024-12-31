const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(mode=true) {
    this.mode=mode;
    this.alphabet = Array.from({length:26},
        (value,index)=>String.fromCharCode(65+index));
  }

  encrypt() {
    let [word,key] = [arguments[0],arguments[1]];

    if(!word || !key){
      throw new Error("Incorrect arguments!");
    }
    // console.log(word,key);

    key=this.prepareKey(key,word.length).split("");
    let encrypted = [];
    for (let i=0; i<word.length; i++) {
      if(this.isLetter(word[i])){
        encrypted.push(this.covertChar(word[i],key[i],"encrypt"));
      }else {
        key.splice(i,0,"");
      encrypted.push(word[i]);
      }
    }
    if(this.mode){
      return encrypted.join("");
    }else{
      return encrypted.reverse().join("");
    }
  }
  decrypt() {
    let [word,key] = [arguments[0],arguments[1]];

    if(!word || !key){
      throw new Error("Incorrect arguments!");
    }
    // console.log(word,key);
    key=this.prepareKey(key,word.length).split("");
    let decrypted = [];
    for (let i=0; i<word.length; i++) {
      if(this.isLetter(word[i])){
        decrypted.push(this.covertChar(word[i],key[i],"decrypt"));
      }else {
        key.splice(i,0,"");
      decrypted.push(word[i]);
      }
    }
    if(this.mode){
      return decrypted.join("");
    }else{
      return decrypted.reverse().join("");
    }
  }

  covertChar(char,key,operation){
    let charIndex=this.alphabet.indexOf(char.toUpperCase());
    let keyIndex=this.alphabet.indexOf(key.toUpperCase());
    let index;
    switch (operation) {
      case "decrypt":  index = charIndex - keyIndex;
        break;
      case "encrypt": index = charIndex + keyIndex;
      break;
    }
    index = (index + this.alphabet.length)%this.alphabet.length;
    return this.alphabet[index];
  }

  isLetter(value){
    return this.alphabet.includes(value.toUpperCase());
  }

  prepareKey(key,requiredLength){
    if(key.length===requiredLength){
      return key;
    }
    if(key.length>requiredLength){
      return key.slice(0,requiredLength);
    }
    if(key.length<requiredLength){
      let result = [];
      let index = 0;
      while (result.length<requiredLength){
        result.push(key[index]);
        if(index<key.length-1){
            index++;
          }else {
            index=0;
          }
      }
      return result.join("");
    }
  }
}

module.exports = {
  VigenereCipheringMachine
};
