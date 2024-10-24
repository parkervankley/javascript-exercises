const palindromes = function (word) {
  word = word.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  let reversed = [...word].reverse().join('');
  console.log(reversed);
  return word === reversed;
};

// Do not edit below this line
module.exports = palindromes;
