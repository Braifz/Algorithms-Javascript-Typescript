let nums = [1, 2, 3, 4];
let nums1 = [1, 1, 1, 1, 1];
let nums2 = [3, 1, 2, 10, 1];

const sum1dArray = (nums) => {
  let arr = [];
  const reducer = (prevVal, currVal) => {
    prevVal + currVal;
    console.log(prevVal, currVal);
  };
  nums.reduce(reducer);
  return arr;
};

const r = sum1dArray(nums);
console.log(r);
