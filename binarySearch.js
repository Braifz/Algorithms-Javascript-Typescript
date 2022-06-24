const arr = [-1, 0, 3, 5, 9, 12, 15, 19, 24, 37, 42, 51, 55, 61]; // target = 9  // output expected = 4  // 9 exists in nums and its index is 4

// this isn't a binary search
const notBinarySearch = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      return i;
    }
  }
  return -1;
};

// this isn't a binary search
const notBinarySearch2 = (nums, target) => {
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

// return the number of interations
const binarySearch = (arr, numToFind) => {
  let start = 0;
  let end = arr.length - 1;
  let num = 0;

  while (start <= end) {
    num++;
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === numToFind) {
      return num;
    } else if (numToFind > arr[mid]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return num;
};

let arrTest = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arrTest1 = [2, 5, 8, 12, 23, 38, 56, 72, 91];
const r3 = binarySearch(arrTest1, 23);
console.log(r3);

// const r2 = realBinarySearch(arr, 61);
// console.log(r2);

// const r = binarySearch(arr, 9);
// console.log(r);

// const r1 = binarySearch2(arr, 9);
// console.log(r1);
