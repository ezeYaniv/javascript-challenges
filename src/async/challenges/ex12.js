// Execute 3 asynchronous functions one after the other in sequence using async await and do not terminate on failure
// Unlike promises, try-catch block can be used on async functions
// catch block for each asynchronous function can be used to catch errors and continue with next execution which will not propagate failures

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

async function execAll(...funcArr) {
  for (let i = 0; i < funcArr.length; i++) {
    try {
      await funcArr[i]();
    } catch (err) {
      console.log(err);
    }
  }
}
execAll(asyncFunc1, asyncFunc2, asyncFunc3);
