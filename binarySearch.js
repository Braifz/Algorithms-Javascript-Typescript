const arr = [-1, 0, 3, 5, 9, 12]; // target = 9  // output expected = 4  // 9 exists in nums and its index is 4

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

// iterative function to implement Binary Search
const realBinarySearch = (arr, target) => {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    console.log(mid);

    if (arr[mid] === target) return true;
    else if (arr[mid] < target) {
      start = mid + 1;
    } else end = mid - 1;
  }

  return false;
};

const r2 = realBinarySearch(arr, 12);
console.log(r2);

// const r = binarySearch(arr, 9);
// console.log(r);

// const r1 = binarySearch2(arr, 9);
// console.log(r1);
