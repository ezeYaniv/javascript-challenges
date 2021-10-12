/*
Write a code to resolve all the list of asynchronous executions of promises and stop if any of them is rejected. Print the output accordingly

    Promise.all is the method which helps to achieve the functionality which settles if all the promises are resolved or any of them are rejected
    It receives array of promises as an argument to it
    Array of results will be the success data if all the promises resolves or the error data on failure of the first one
*/

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve) => {
  setTimeout(resolve, 100, 'foo');
});

const arrayOfPromises = [promise1, promise2, promise3];

async function allPromises() {
  const result = await Promise.all(arrayOfPromises)
    .then((values) => values)
    .catch((err) => err);

  return result;
}

allPromises().then((res) => console.log(res));
