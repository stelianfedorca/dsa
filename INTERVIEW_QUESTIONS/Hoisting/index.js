// function declaration are hoisted.
// function hoisting allows us to call the function before it is declared

myFunc();

function myFunc() {
  console.log('calling myFunc()...');
}
