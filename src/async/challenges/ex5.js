/*
Print numbers from 10 to 1 with delay of 1 second between each value being printed using setTimeout using pre ES6 features only

    We can use 3rd parameter of setTimeout to pass the value of iteration which creates a new scope each time loop iterates
    We can also use an inner function scope (IIFE) within the for loop for each iteration

*/

function dontDoThis() {
  let index = 10;
  while (index >= 1) {
    timer(index);
    index--;
  }
  return;
}

function timer(index) {
  setTimeout(() => {
    console.log(index);
  }, 1000 * (10 - index));
}

dontDoThis();
