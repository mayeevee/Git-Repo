
/*
// 3-1. flattening(list)
let arrays = [[1, 2, 3], [4, 5], [6]];

const flattenedArray = arrays.reduce((accumulator, currentArray) => {
  // Concat merges the arrays together
  return accumulator.concat(currentArray);
}, []);

console.log(flattenedArray);

// 3-2. loop(value, test, update, body)
// Takes a value, a test function, an update function, and a body function
function loop(value, test, update, body) {
    for (let current = value; test(current); current = update(current)) {
      body(current);
    }
  }
  
  loop(3, n => n > 0, n => n - 1, console.log);
  // Output:
  // 3
  // 2
  // 1

// 3-3. everyLoop(array, test)
// 3-4. everySome(array, test)
// Iterates through each element in the array
function everyLoop(array, test) 
{
    for (let element of array) {
        if (!test(element)) {
          return false;
        }
      }
      return true;
    }

// Checks if there is any element that does not satisfy the given test
function everySome(array, test) 
{
    return !array.some(element => !test(element));
}

console.log(everyLoop([1, 3, 5], n => n < 10));
// → true
console.log(everyLoop([2, 4, 16], n => n < 10));
// → false
console.log(everyLoop([], n => n < 10));
// → true

console.log(everySome([1, 3, 5], n => n < 10));
// → true
console.log(everySome([2, 4, 16], n => n < 10));
// → false
console.log(everySome([], n => n < 10));
// → true

export function everyLoop(array, test) {
  for (let element of array) {
    if (!test(element)) {
      return false;
    }
  }
  return true;
}

export function everySome(array, test) {
  return !array.some(element => !test(element));
}
*/

// 3-1. flattening
export function flattening(list) {
  return list.reduce((accumulator, currentArray) => {
    return accumulator.concat(currentArray);
  }, []);
}

// 3-2. loop
export function loop(value, test, update, body) {
  for (let current = value; test(current); current = update(current)) {
    body(current);
  }
}

// 3-3. everyLoop
export function everyLoop(array, test) {
  for (let element of array) {
    if (!test(element)) {
      return false;
    }
  }
  return true;
}

// 3-4. everySome
export function everySome(array, test) {
  return !array.some(element => !test(element));
}
