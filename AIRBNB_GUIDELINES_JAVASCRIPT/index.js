const original = { a: 1, b: 2 };

// bad
// const copy = Object.assign(original, { c: 3 }); // it also mutates the original object

// good
const copy = { ...original, c: 3 };

console.log('original: ', original);
console.log('copy: ', copy);

const arr = [1, 2, 3];

const copyArr = [...arr];

console.log('copy array: ', copyArr);

const [first, _, third] = arr;

console.log(first, third);


// naming convetion
const thisIsMyObject = {};
function handleFetch() {};