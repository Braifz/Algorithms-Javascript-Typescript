let num1 = 1;
let num2 = 3;
let num3 = 26;

function positionInAlphabet(num) {
  let Alphabet = [
    "a",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  if (num > 26) {
    console.log("invalid");
    return "invalid";
  }
  console.log(Alphabet[num]);
  return Alphabet[num];
}

positionInAlphabet(num1);
positionInAlphabet(num2);
positionInAlphabet(num3);
