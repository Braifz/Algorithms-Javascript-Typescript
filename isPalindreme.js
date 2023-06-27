/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  let xToString = x.toString();
  let reversedString = xToString.split('').reverse().join('');
  return xToString === reversedString;
};
