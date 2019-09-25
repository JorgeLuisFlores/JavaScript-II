// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

const number = () => {
  let number = 0;


  return () => {
    ++number
    return number
  }
};

const newNumber = number();
console.log(newNumber());
console.log(newNumber());
console.log(newNumber());



/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  let counter = 0;

  return() => {
    ++counter
    return counter
    }
  // Return a function that when invoked increments and returns a counter variable.
};

const newCounter = counter();
newCounter();
newCounter();

// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
