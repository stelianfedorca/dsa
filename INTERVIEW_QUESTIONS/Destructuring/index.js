// use object destructuring instead of array destructuring when returning multiple values

// bad
function processInput(input) {
  // some logic
  return [left, right, top, bottom];
}

// good
function processInputGood(input) {
  // some logic
  return { left, right, top, bottom };
}
