## 1. types of variables in JS

Response:<br>
const, var, let

## 2. difference between const, var, let

<font size=3>Response:<br>
a. const variable - is used when we want to work with constants, therefore it can't be updated or redeclared
b. let variable - is used in order to be able to update that variable later but can not be redeclared
c. var variable - can be updated and redeclared within its scope
They are all hoisted to the top of their scope
var variables are initialized with undefined, while const and let are not initialized
</font>

## 3. what is hoisting and why does it exists

<font size=3>
Response:<br>
Hoisting is a behaviour in which a function or variable can be used before declaration<br>
In other words, the function and variable declarations are added to memory during the compile phase.<br>

<strong>!! Initialization is not hoisted, only declaration</strong>
<br>
Why does it exists ??<br>
Response:<br>
Mainly for convenience, because it reduces the overhead<br>
For example: if we have 3 functions and everyone of them calls the other but they are not in the correct order, without hoisting the js will yell at us because it can't see the function declaration but because hoisting basically moves the declaration at the top of the file, it's going to be perfectly fine</font>
<br>

## 4. What is Object.prototype

<font size=4>Response: <br>

- is an object asociated with every function and objects default by JavaScript. Inside this object we can add new variables and methods
  </font>

## 5. Difference between classes and objects

<font size=4> Response: <br>
**Class** - is a way of defining objects with similar properties and behaviour. Classes are essentially blueprints that define the structure of an object, including its properties and methods.<br>
**Objects** - is a data type that represents a collection of related data and behaviours

</font>

## 6. What is the `this` keyword ? When do we use it ?

<font size=4>
  Response: <br>
  `this` keyword refers to an object <br>
  but which object depends on how `this` is being invoked<br>
  For example: <br>
  In an object method, `this` refers to the object<br>
  Alone, `this` refers to the global object<br>
  In a function, `this` refers to the global object<br>
  
  It's used to refer to the current context or object within function or method. Its usage can vary depending on the specific context, such as object methods, constructors, event handlers, global scope 
</font>

## 7. What is the difference between a normal function and arrow function

<font size=4>
  Response: <br>
<strong>Normal function</strong>: is useful for creating methods inside objects and functions that need `this` keyword.<br>
<strong>Arrow function</strong>: is useful for concise and predictable `this` behavior, it's often used in callbacks and functional programming
</font>

## 8. What is a Promise
<font size=4>
  Response: <br>

It's an object that represents the eventual completion or failure of an asynchronous operation and its resulting value.<br>
The promise object has 3 state: 
- pending
- resolved
- rejected
</font>

## 9. Mutable vs Immutable

<font size=4>
  Response: <br>

In javascript, only objects and arrays are mutable, not primitive values.<br>
A mutable object is an object whose state can be modified after its creation.<br>

</font>
