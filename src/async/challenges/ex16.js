/*
Design a utility which takes URL and a value for attempts which will attempt to make a fetch request. If on failure it tries again with increasing delay for number of times which user has requested

    Utility can designed which returns a promise which attempts to make requests and return the data on success
    The fetch request attempts to make calls after increasing time delay on failure
    If all the attempts by to get response fails, promise gets rejected

*/

const URL = 'https://pokeapi.co/api/v2/pokemon/ditto';

async function makeApiCall(url, attempts) {
  let count = 0;

  while (count < attempts) {
    await new Promise((resolve, reject) => {
      return setTimeout(() => {
        resolve();
      }, 2000 * count);
    });
    const call = await helper(url, count);

    if (call.success) {
      return call;
    }
    count++;
  }
  return 'Nothing sorry';
}

async function helper(url, count) {
  try {
    const res = await fetch(url);
    const json = await res.json();
    return { success: true, json };
  } catch (err) {
    console.log('error getting your pokemon', err);
    return { success: false, err };
  }
}

makeApiCall(URL, 3).then(console.log).catch(console.log);
