const sumAll = function(intOne, intTwo) {
  if (intOne < 0 || intTwo < 0 || !Number.isInteger(intOne) || !Number.isInteger(intTwo)) return "ERROR";
  let sum = 0;
  for (i = Math.min(intOne, intTwo); i <= Math.max(intOne, intTwo); i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
