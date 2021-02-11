"use strict";

console.log("Rot-13 algorithm ...");
var text = "karam";
var convert = function convert(text) {
    var smallAlphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var capitalAlphabet = smallAlphabet.map(function (letter) {
        return letter.toUpperCase();
    });
    var textArr = text.split('');
    for (var i = 0; i < textArr.length; i++) {
        if (smallAlphabet.includes(textArr[i])) {
            var indexed = smallAlphabet.indexOf(textArr[i]);
            if (indexed > 13) {
                indexed = indexed - 26 + 13;
                textArr[i] = smallAlphabet[indexed];
            } else {
                textArr[i] = smallAlphabet[indexed + 13];
            };
        } else if (capitalAlphabet.includes(textArr[i])) {
            var capitalIndexed = capitalAlphabet.indexOf(textArr[i]);
            if (capitalIndexed > 13) {
                capitalIndexed = capitalIndexed - 26 + 13;
                textArr[i] = capitalAlphabet[capitalIndexed];
            } else {
                textArr[i] = capitalAlphabet[capitalIndexed + 13];
            };
        }
    }
    text = textArr.join('');
    console.log(text);

    return text;
};

convert("Hello, friend!");