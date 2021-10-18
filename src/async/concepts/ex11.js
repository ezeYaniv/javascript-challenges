// Explain the working of Promise.race with few asynchronous function example
// The Promise.race method returns a promise that fulfills or rejects as soon as one of the promises fulfills or rejects, with the success or failure

let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(42);
  }, 1000);
});

let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('foo');
  }, 500);
});

let promiseArray = [p1, p2];

Promise.race(promiseArray)
  .then((val) => console.log(val))
  .catch((err) => console.log(err));
