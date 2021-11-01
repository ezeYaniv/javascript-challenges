// Execute the given list of asynchronous functions in parallel and return the results as an array to the callback

// EXAMPLE CODE
function asyncFunc1(callback) {
  setTimeout(() => {
    callback(1);
  }, 3000);
}

function asyncFunc2(callback) {
  setTimeout(() => {
    callback(2);
  }, 2000);
}

function asyncFunc3(callback) {
  setTimeout(() => {
    callback(3);
  }, 1000);
}

asyncParallel([asyncFunc1, asyncFunc2, asyncFunc3], (result) => {
  console.log(result); // 1, 2, 3 (prints results of each asynchronous function in order)
});

// ACTUAL CODE
function asyncParallel(arr, callback) {
  const resArr = new Array(arr.length);
  let counter = 0;

  arr.forEach((func, idx) => {
    func((value) => {
      resArr[idx] = value;
      counter++;
      if (counter >= arr.length) {
        callback(resArr);
      }
    });
  });
}
