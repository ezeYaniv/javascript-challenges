// Execute 3 asynchronous functions one after the other in sequence using async await
// Async function with await for each promise can be used to execute in sequence

function asyncFunc1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(1);
      resolve(1);
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

const funcArr = [asyncFunc1, asyncFunc2, asyncFunc3];

// THIS ONE WORKS WITH NO LOOPING, PASSING FUNCTION ARGUMENTS INDIVIDUALLY
// async function executeAll(func1, func2, func3) {
//   try {
//     await func1();
//     await func2();
//     await func3();
//   } catch (err) {
//     console.log("error", err);
//   }
// }

// THIS ONE WORKS WITH A FUNCTION ARRAY
async function executeAll(funcArr) {
  try {
    // testing with for...of and for loops
    for (const func of funcArr) {
      await func();
    }
    // for(let i = 0; i<funcArr.length; i++) {
    //   await funcArr[i]();
    // }
  } catch (err) {
    console.log(err);
  }
}

executeAll(funcArr);
