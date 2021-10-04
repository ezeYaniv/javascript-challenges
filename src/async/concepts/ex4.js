/*
Wrap the setTimeout function to convert to a promise

    Promise can be used to wrap the setTimeout to make the code more readable
    Function can take delay as argument and return a promise which gets resolved after timeout is complete

*/

function delayTimeout(delay) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

delayTimeout(2000)
  .then(() => console.log('success'))
  .catch((err) => console.log(err));
