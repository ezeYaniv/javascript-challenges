/*
Show the working of async await work with promises

    async functions are asynchronous functions in which the asynchrous code can be executed in synchronous looking manner using await
    await expects a promise and the execution will stop until the promise is resolved
    If promise gets rejected, error is thrown with failure reason which can be handled using simple try-catch block

*/

async function asyncPromise(url) {
  try {
    const req = await fetch(url);
    const res = await req.json();
    console.log(res);
  } catch (err) {
    console.log('there is an error', err);
  }
}

asyncPromise('https://pokeapi.co/api/v2/pokemo/ditto');
