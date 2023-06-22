let str = 'hOla';
let str1 = 'aerEauiOs';

const vowelCounter = (str) => {
  let num = 0;
  let strToLowerCase = str.toLowerCase();
  for (let i = 0; i <= strToLowerCase.length; i++) {
    if (
      strToLowerCase[i] == 'a' ||
      strToLowerCase[i] == 'e' ||
      strToLowerCase[i] == 'i' ||
      strToLowerCase[i] == 'o' ||
      strToLowerCase[i] == 'u'
    ) {
      num++;
    }
  }
  return num;
};

const r = vowelCounter(str1);
console.log(r);
