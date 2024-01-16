const middle = function (arr) {
  let midArr = [];
  if (arr. length > 2 && arr.length %2 ==  0) {
    let middle1 = arr[[Math.floor(arr.length / 2)] - 1];
    midArr.push(middle1)
    let middle2 = arr[Math.floor(arr.length / 2)];
    midArr.push(middle2) 
  } else if (arr. length > 2 && arr.length %2 ==  1) {
    let middle = arr[Math.floor(arr.length / 2)];
    midArr.push(middle)
  }
  return('midArr', midArr)
}

module.exports = middle;