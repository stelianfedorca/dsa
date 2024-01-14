/***
 * Write a function findCharacter(str), which takes a string str as the argument.
 *  The function should return the first non-repeating character.
 */

// hello => output: h
function findCharacter(str) {
  // I use hashmap becuase on average the time complexity of adding and finding are O(1) (constant time)
  let frequencyCounter = new Map();

  for (let key of str) {
    const frequency = frequencyCounter.get(key);
    if (frequency > 0) {
      frequencyCounter.set(key, frequency + 1);
    } else {
      frequencyCounter.set(key, 1);
    }
  }

  for (let key of str) {
    if (frequencyCounter.get(key) === 1) {
      return key;
    }
  }

  return null;
}

// time complexity: O(n) as we iterate through all the characters in a string
// space complexity: O(n) as we need a map that store n characters of a string

console.log(findCharacter('hello'));
console.log(findCharacter('abbcddee'));
console.log(findCharacter('aabbcc'));
