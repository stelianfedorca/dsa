// "abaac" => {a: 3, b: 1, c: 1}
// your pin number is 1234 => {y: 1, o: 1, u: 2, r:2, p: 1, i: 2, n:2, m: 1, e: 1, s:1, 1: 1, 2:1, 3: 1, 4:1}

// function isAlphanumeric(str) {
//   return /^[a-zA-Z0-9]+$/.test(str);
// }

// refactored
function isAlphanumeric(char) {
  const code = char.charCodeAt(0);
  if (
    !(code > 47 && code < 58) && // 0-9
    !(code > 64 && code < 91) && // A-Z
    !(code > 96 && code < 123) // a-z
  ) {
    return false;
  }
  return true;
}

// function charCount(str) {
//   const result = {};

//   for (let i = 0; i < str.length; i++) {
//     const character = str[i].toLowerCase();
//     if (isAlphanumeric(character)) {
//       if (result[character]) {
//         result[character]++;
//       } else {
//         result[character] = 1;
//       }
//     }
//   }

//   return result;
// }

// refactored
function charCount(str) {
  const result = {};

  for (let char of str) {
    if (isAlphanumeric(char)) {
      const character = char.toLowerCase();
      result[character] = ++result[character] || 1;
    }
  }

  return result;
}

// console.log(charCount('your pin number is 1234!'));
// console.log(charCount('abaac'));
console.log(charCount('Hello hi'));
