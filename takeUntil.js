const takeUntil = function(array, callback) {
  let resultArr = [];
  for(let i = 0; i < array.length; i++) {
    if (callback(array[i]) == true) {
      return resultArr;
    } else {resultArr.push(array[i])}
  }
  return resultArr;
};

module.exports = takeUntil;