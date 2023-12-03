function findFirstRepeated(gifts) {
    const noRepeatGifts = [];
    let res = -1;

    for (const gift of gifts) {
        if (noRepeatGifts.includes(gift)) {
            res = gift;
            break;
        }
        noRepeatGifts.push(gift);
    }
    return res;
}

const test = [2, 1, 3, 5, 3, 2]
const res = findFirstRepeated(test)
console.log(res)