const arr = [1, 2, 4, 5, 10, 6, 3];

//declarativo
const removeEven = (num) => {
  const newArr = num.filter((e) => e % 2 != 0);
  return newArr;
};

const r = removeEven(arr);
console.log(r);

//imperativo
const removeEvenImperative = (num) => {
  let odd = [];
  for (let i = 0; i < num.length; i++) {
    if (num[i] % 2 != 0) {
      odd.push(num[i]);
    }
  }
  return odd;
};

const r2 = removeEvenImperative(arr);
console.log(r2);
