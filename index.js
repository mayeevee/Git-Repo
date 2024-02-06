const quotations = [
    "There are no secrets to success. It is the result of preparation, hard work, and learning from failure. -Colin Powell",
     "If you are not willing to risk the usual, you will have to settle for the ordinary. -Jim Rohn",
     "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose. -Dr. Seuss"
   ];
   
   // Function to get a random index from the array
   const getRandomIndex = () => Math.floor(Math.random() * quotations.length);
   
   // Function to print a random quotation to the console
   const printRandomQuotation = () => {
     const randomIndex = getRandomIndex();
     console.log(quotations[randomIndex]);
   };
   
   // Call the function to print a random quotation
   printRandomQuotation();

   import { flattening, loop, everyLoop, everySome } from './exercises.js';

// Example
let arrays = [[1, 2, 3], [4, 5], [6]];
console.log(flattening(arrays));
// → [1, 2, 3, 4, 5, 6]

loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1

console.log(everyLoop([1, 3, 5], n => n < 10));
// → true

console.log(everySome([2, 4, 16], n => n < 10));
// → falsei