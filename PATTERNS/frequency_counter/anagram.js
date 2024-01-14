function validAnagram(s, t) {
  if (s.length !== t.length) return false;

  let letters = {};

  for (let character of s) {
    // letters[character] = (letters[character] || 0) + 1;
    letters[character] ? (letters[character] += 1) : (letters[character] = 1);
  }

  console.log(letters);

  for (let i = 0; i < t.length; i++) {
    if (!letters[t[i]]) {
      return false;
    } else letters[t[i]] -= 1;
  }

  // s: {a: 2, b: 1}
  // t: {a: 1, b: 1} => {a: 0, b: 1}

  return true;
}

console.log(validAnagram('ab', 'a'));
