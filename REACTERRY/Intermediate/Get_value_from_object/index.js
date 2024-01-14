/***
 * Write a function called get(key, object) that takes a key and an object as input
 * and returns the value assigned to the key in the object.

The object can have many nested objects in it. 
The function should recursively search for the key in the object and 
its nested objects and return the value if found, or undefined if not found. 
If the object is null or undefined, the function should return undefined.

 */

const get = (key, object) => {
  if (typeof object !== 'object' || object === null) {
    return undefined;
  }
  // base case
  if (key in object) {
    return object[key];
  }

  for (let objKey in object) {
    return get(key, object[objKey]);
  }

  return undefined;

  // // if (!object[key] || !key) return undefined;
  // console.log(key);

  // if (object.hasOwnProperty(key)) {
  //   return 'yes';
  // }

  // // base case
  // if (object.hasOwnProperty(key) && typeof object[key] !== 'object') {
  //   return object[key];
  // }

  // if (typeof object[key] === 'object') {
  //   return get(key, object);
  // }
};

const obj = {
  a: {
    b: {
      c: 1,
    },
  },
};

console.log(get('c', obj));
