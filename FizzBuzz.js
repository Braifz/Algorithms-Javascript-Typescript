let arr = [1, 2, 3, 5, 12, 15, 20, 22, 23, 25, 26, 27];

const FizzBuzz = (arr) => {
  for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] % 5 === 0 && arr[i] % 3 === 0) console.log('Fizzbuzz');
    else if (arr[i] % 3 === 0) console.log('Fizz');
    else if (arr[i] % 5 === 0) console.log('Buzz');
    else console.log(arr[i]);
  }
};

let r = FizzBuzz(arr);
console.log(r);
