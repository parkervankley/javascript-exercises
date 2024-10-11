const repeatString = function(word, numIterations) {
  let returnText = "";
  if(numIterations < 0) return "ERROR";
  for (let i = 0; i < numIterations; i++) {
    returnText += word;
  }
  return returnText;
};

// Do not edit below this line
module.exports = repeatString;
