console.log("Rot-13 algorithm ...");

const convert = (text) => {
  const lCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  const uCase = lCase.map((letter) => letter.toUpperCase());
  let textArr = text.split("");
  let replace = (arr, m) => {
    let index = arr.indexOf(textArr[m]);
    if (index >= 13) {
      index = index - 13;
      textArr[m] = arr[index];
    } else {
      textArr[m] = arr[index + 13];
    }
  };
  for (let i = 0; i < textArr.length; i++) {
    if (lCase.includes(textArr[i])) {
      replace(lCase, i);
    } else if (uCase.includes(textArr[i])) {
      replace(uCase, i);
    }
  }
  text = textArr.join("");
  console.log(text);
};

convert("Vs guvf vf qrpbqrq, gura gur cebtenz jbexf!");