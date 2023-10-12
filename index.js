console.log('hello from index.js');

// Big O Notation

/* 1. Motivate the need for something like Big O Notation
  
    How can we determine which one of the solutions is the best ? 
     - using Big O Notation
    
    Big O Notation is basically a system of comparing the code (the solutions)

    # Who cares ? 
    - for large companies, where the work with huge set of data is common, the best solution matters 
      because it reduces the space and time complexity of that specific function
    - it's useful for discussing trade-offs between different approaches
    - when your code slows done, identifying parts of the code that are inefficient can help us the pain
      points in our app.
    - it comes up in interviews
  */

// How to time the code (example)
/**
  - what does better mean ? 
  # Faster ? (this one)
  # Less-memory intensive ?
  # More readable ? 

  We're going to focus on the speed

  - how long does the code takes to execute ? 

  When we talk about big O, we are talking about the worst case scenario
 */

// 1. understand the problem
// 2. explore concrete examples
// 3. break it down
// 4. solve/simplify
// 5. look back and refactor

/***
 * Problem solving patterns
 * - master common problem solving patterns
 */

// PATTERNS
/*
  1. Frequency counter 
  - this pattern uses objects or sets to collect values/frequencies of values
  - this can avoid the need for nested loops or O(n^2) operations with array/strings
  - it's useful when we have multiple inputs and we have to compare them
  - it's usually O(n) time
*/
