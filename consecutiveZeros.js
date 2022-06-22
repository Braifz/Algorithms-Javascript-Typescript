const nums = [1,0,2,3,0,4,5,0] //[1,0,0,2,3,0,0,4]
const nums1 = [1,2,3,]

const consecutiveZero = (arr) => {
    // recorre array de atras hacia adelante
    for (let i = arr.length - 1; i >= 0; i--) {
        // si es igual a 0 y no es el ultimo num del array
        if (arr[i] === 0 && i !== arr.length - 1) {
            //  
            for (let j = arr.length - 1; j > i; j--) {
                if (j < arr.length - 1) {
                    arr[j + 1] = arr[j];
                }
            }
            arr[i + 1] = 0;
        }
    }
    return arr
}


let r = consecutiveZero(nums)
console.log(r)


