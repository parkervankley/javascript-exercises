const reverseString = function(stringToReverse) {
  const stringArr = stringToReverse.split("");
  const reverseStringArr = [];
  for(const letter of stringArr) {
    reverseStringArr.unshift(letter);
  }
  return reverseStringArr.join("");
};

// Do not edit below this line
module.exports = reverseString;
