let arr = [10, 20, 30, 40]; // si el numero que le paso por parametro 'num' esta en el array me deberia dar el index del array donde se encuentra el numero

const insertPosition = (arr, num) => {
  let newArr = arr.filter((e, index) => {
    return arr[e] == num ? index : 'no existe el elemento';
  });
  console.log(newArr);
};

insertPosition(arr, 0);
