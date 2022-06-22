const arr = [-1, 0, 3, 5, 9, 12]; // target = 9  // output expected = 4  // 9 exists in nums and its index is 4
const arr1 = [-1, 0, 3, 5, 9, 12]; // target = 2 // output expected = -1 // 2 does not exist in nums so return -1

// this isn't a binary search
const binarySearch = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      return i;
    }
  }
  return -1;
};

// this isn't a binary search
const binarySearch2 = (nums, target) => {
  const output = nums.filter((e, i) => {
    if (e === target) {
      return i;
    }
  });
  return -1;
};

const realBinarySearch = (arr, target) => {
  const max = arr.length - 1;
  const mid = Math.floor(max / 2);

  if (mid === target) return mid;


  for (l){
    
  }

};

const r2 = realBinarySearch(arr);

// const r = binarySearch(arr, 9);
// console.log(r);

// const r1 = binarySearch2(arr, 9);
// console.log(r1);
