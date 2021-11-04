/*
Execute 3 asynchronous functions one after the other in sequence using promise chaining and do not terminate on failure

    The promise which gets rejected will invoke the 2nd function argument to then handler
    The failure handler will receive the error and continue with next execution which will not propagate failures

*/

const p1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(1);
    }, 1500);
  });
};

const p2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('this is the error message 2');
    }, 500);
  });
};

const p3 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(3);
    }, 2500);
  });
};

p1()
  .then(
    (res) => p2(),
    (err) => p2()
  )
  .then(
    (res) => p3(),
    (err) => p3()
  )
  .then(
    (res) => res,
    (err) => err
  );
