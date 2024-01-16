const eqObjects = function(object1, object2) {
  if ((Object.keys(object1).length === Object.keys(object2).length) !== false){return true};
  for (const key in object1) {
    if ((Array.isArray(object1[key]) && Array.isArray(object2[key])) !== false) {
      {return true};
    }
  }
  return true;
};

module.exports = eqObjects;