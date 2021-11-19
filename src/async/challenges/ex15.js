/* Design a utility which takes array of asynchronous functions and returns the 1st successful or non successful result with max waiting time set by the user
    - Promise.race is an in built JavaScript method which helps us to return the first resolved or rejected promise data from promises array
    - Timeout feature can be set by adding a function returning a promise which rejects after specified amount of time
    - If any promise resolves before timeout the promise which settles first will be the output else timeout will cause rejection
*/

function asyncFunc1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(1);
    }, 3000);
  });
}

function asyncFunc2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(2);
    }, 2000);
  });
}

function asyncFunc3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(3);
    }, 1000);
  });
}

const asyncArr = [asyncFunc1, asyncFunc2, asyncFunc3];

/* raceUtility function takes args: asyncarr, waitTime
    - create new Promise
      - run Promise.race(). On resolution, call resolve() on the result
      - run setTimeout -> rejects after waitTime
*/

function raceUtil(asyncArr, waitTime) {
  asyncArr = asyncArr.map((func) => func());
  return new Promise((resolve, reject) => {
    Promise.race(asyncArr)
      .then((res) => resolve(res))
      .catch((err) => resolve(err));
    setTimeout(() => {
      reject('No promises completed fast enough!');
    }, waitTime);
  });
}

raceUtil(asyncArr, 500)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
