const findKey = function (object,callback) {
  const result = Object.keys(object).find(key => {
    if (callback(object[key])) { 
      return key;
    }
  });
  return result;
}

module.exports = findKey;