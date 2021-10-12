// Write a code to resolve all the list of asynchronous executions of promises no matter if each execution succeeds or fails. Print the output of each
// Promise.allSettled is the method which helps to achieve the functionality which completes after all promises settle no matter of failures
// It receives array of promises as an argument to it
// Array of results will be the output after completion of all promises with status as 'fulfilled' or 'rejected'

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(reject, 100, 'foo');
});

const arrayOfPromises = [promise1, promise2, promise3];

// Option 1
const result = async () => {
  return Promise.allSettled(arrayOfPromises)
    .then((val) => val)
    .catch((err) => err);
};
result().then((val) => console.log(val));

// Option 2
const result2 = Promise.allSettled(arrayOfPromises);
result2.then((val) => console.log(val));
