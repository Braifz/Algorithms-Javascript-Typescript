const nums = [-4, -1, 0, 3, 10];
const nums1 = [-7, -3, 2, 3, 11];

var sortedSquares = function (nums) {
  let arrSquared = nums.map((num) => num ** 2);
  console.log(arrSquared);
  let sortArr = arrSquared.sort((a, b) => a - b);
  return sortArr;
};

const r = sortedSquares(nums);
console.log(r);
