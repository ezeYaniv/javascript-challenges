/*
Execute 3 asynchronous functions one after the other in sequence using promise chaining

    The implementation of chaining is that the result is passed through the chain of then handlers for all the promises
    then method on Promise also returns a promise which can be used to perform then on the returned promise
    The errors in promise / promise chaining can be handled with the error callback for each promise when it settles or with a generic catch block
*/

// let p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(42);
//     }, 1000);
// });

// let p2 = new Promise((resolve, reject) => {
// setTimeout(() => {
//     resolve('foo');
// }, 500);
// });

// let p3 = new Promise((resolve, reject) => {
// setTimeout(() => {
//     resolve('catsss');
// }, 1500);
// });

const p1 = (something) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(something);
    }, 1500);
  });
};

const p2 = (something) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(something);
    }, 500);
  });
};

const p3 = (something) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(something);
    }, 2500);
  });
};

p1('hiiiii').then((res) =>
  p2(res).then((res) => p3(res).then((res) => console.log(res)))
);
