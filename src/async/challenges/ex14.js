/* 
Execute an array of asynchronous functions simultaneously but print the output in the ordered sequence. Do not wait for printing the data if it already available after promise is settled
  Array method reduce can be used to make the simultaneously execution on promise settlement
  Unlike sequential execution, the parallel execution of asynchronous functions happen but the output will executed in order of sequence
*/

function asyncFunc1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('func1 call', 1);
      reject(1);
    }, 3000);
  });
}

function asyncFunc2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('func2 call', 2);
      resolve(2);
    }, 2000);
  });
}

function asyncFunc3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('func3 call', 3);
      resolve(3);
    }, 1000);
  });
}

function executeAll(...asyncArr) {
  asyncArr
    .map((asyncFunc) => asyncFunc())
    .reduce((prev, curr) => {
      return prev
        .then(() => curr)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    }, Promise.resolve());
}

executeAll(asyncFunc1, asyncFunc2, asyncFunc3);
