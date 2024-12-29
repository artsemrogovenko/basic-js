const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  if (domains.length === 0) {
    return {};
  }
  let stats = {};
  let reversed = domains.map((domain) => "." + domain.split(".").reverse().join("."));

  reversed.forEach(function (value) {
    let dnsArray = value.split(".")
        .map((item) => "." + item);
    dnsArray.shift();

    let pseudoStack = [];
    for (let i = 0; i < dnsArray.length; i++) {
      pseudoStack.push(dnsArray[i]);
      stats[pseudoStack.join("")] = 0;
    }
  });

  for (const key of Object.keys(stats)) {
    for (const string of reversed) {
      if(string.includes(key)){
        stats[key]= stats[key]+1;
      }
    }
  }

  return stats;
}

module.exports = {
  getDNSStats
};
