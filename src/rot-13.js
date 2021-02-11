console.log("Rot-13 algorithm ...");
let text = "karam"
const convert = text => {
    const smallAlphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    const capitalAlphabet = smallAlphabet.map(letter => letter.toUpperCase());
    let textArr = text.split('');
    for(let  i = 0; i < textArr.length; i++) {
        if (smallAlphabet.includes(textArr[i])) {
            let indexed = smallAlphabet.indexOf(textArr[i]);
            if(indexed > 13) {
                indexed = indexed-26+13;
                textArr[i] = smallAlphabet[indexed];
            } else {
                textArr[i] = smallAlphabet[indexed + 13];
            };
        } else if(capitalAlphabet.includes(textArr[i])) {
            let capitalIndexed = capitalAlphabet.indexOf(textArr[i]);
            if(capitalIndexed > 13) {
                capitalIndexed = capitalIndexed-26+13;
                textArr[i] = capitalAlphabet[capitalIndexed];
            } else {
                textArr[i] = capitalAlphabet[capitalIndexed + 13];
            };
        }
    }
    text = textArr.join('');
    console.log(text);

    return text;
}









convert("Hello, friend!");