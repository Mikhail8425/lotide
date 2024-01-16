const without = function(arr1, arr2) {
  let resultArr = [];
  for (let ar1 of arr1) {
    for (let ar2 of arr2) {
      if (ar1 !== ar2) {
        resultArr.push(ar1)
      }
    }
  }
  console.log(resultArr);
} 

module.exports = without;