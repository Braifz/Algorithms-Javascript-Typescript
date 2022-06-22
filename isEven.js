let arr = [4, 2, 1, -10000, -7];

const isEven = (arr) => {
  newArray = arr.filter((n) => {
    return n % 2 === 0;
  });
  console.log(newArray);
  return newArray;
};

isEven(arr);
