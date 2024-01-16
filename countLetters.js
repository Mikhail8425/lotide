const countLetters = function (str) {
  let result = {};
  for (let letter of str) {
    result[letter] = result.hasOwnProperty(letter) ? result[letter] + 1 : 1;
  }
  return result;
}

module.exports = countLetters;
//L - 2, H -1