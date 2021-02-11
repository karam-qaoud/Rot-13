"use strict";

console.log("Rot-13 algorithm ...");

var convert = function convert(text) {
  var smallAlphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var capitalAlphabet = smallAlphabet.map(function (letter) {
    return letter.toUpperCase();
  });
  var textArr = text.split("");
  var replace = function replace(arr, m) {
    var index = arr.indexOf(textArr[m]);
    if (index >= 13) {
      index = index - 26 + 13; //English alphabet is 26 letters
      textArr[m] = arr[index];
    } else {
      textArr[m] = arr[index + 13];
    }
  };
  for (var i = 0; i < textArr.length; i++) {
    if (smallAlphabet.includes(textArr[i])) {
      replace(smallAlphabet, i);
    } else if (capitalAlphabet.includes(textArr[i])) {
      replace(capitalAlphabet, i);
    }
  }
  text = textArr.join("");
  console.log(text);
};

convert("Vs guvf vf qrpbqrq, gura gur cebtenz jbexf!");