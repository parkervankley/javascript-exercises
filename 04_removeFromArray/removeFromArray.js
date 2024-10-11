const removeFromArray = function(arr, ...elementsToRemove) {
  for (element of elementsToRemove) {
    arr = arr.filter(item => item !== element);
  }
  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
