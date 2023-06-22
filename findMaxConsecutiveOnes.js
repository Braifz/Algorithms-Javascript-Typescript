nums = [1, 1, 0, 1, 1, 1];
nums1 = [1, 0, 1, 1, 0, 1];

var findMaxConsecutiveOnes = function (nums) {
  let ones = 0;
  let totalOnes = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 0) {
      ones = 0;
    } else if (nums[i] == 1) {
      ones++;
      totalOnes < ones ? (totalOnes = ones) : null;
    }
  }
  return totalOnes;
};

const r = findMaxConsecutiveOnes(nums1);
console.log(r);
