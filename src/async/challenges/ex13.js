/*
Execute an array of asynchronous functions which returns a promise, one after the other in sequence

    Asynchronous functions can be executed and promises can be captured in an array
    Array method reduce can be used to make the sequential execution on promise settlement

*/
function asyncFunc1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(1);
      reject(1);
    }, 3000);
  });
}

function asyncFunc2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(2);
      resolve(2);
    }, 2000);
  });
}

function asyncFunc3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(3);
      resolve(3);
    }, 1000);
  });
}

const asyncArray = [asyncFunc1, asyncFunc2, asyncFunc3].map((func) => func());
const arr = [];
const result = asyncArray.reduce((acc, current) => {
  console.log('acc', acc, 'curr', current);
  const obj = current
    .then((res) => ({ status: 'fulfilled', value: res }))
    .catch((err) => ({ status: 'rejected', reason: err }));
  arr.push(obj);
  return obj;
}, []);

result.then((res) => console.log(arr)).catch((err) => console.log('err', err));
