/* 
Convert the xmlHTTPRequest to promise based function to get the data from the server asynchronously (fetch)
- The Promise can be used to wrap the XHR request and provide cleaner interface to user for AJAX requests
- Success and failure of the XHR request can be handled to resolve or reject the promise respectively
*/

// The xhr response to resolve function doesn't return a usable object when xmlFetch is called below
function xmlFetch(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.addEventListener('load', resolve(xhr));
    xhr.addEventListener('error', reject('error!'));
    xhr.open('GET', url);
    xhr.send();
  });
}

// driver code
xmlFetch('https://pokeapi.co/api/v2/pokemon/ditto').then((data) =>
  console.log(data)
);

// Functioning code from example:
// Uses try/catch block and xhr.onload and .onerror methods instead of addEventListeners

function fetchData(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);

    xhr.onload = function () {
      try {
        if (this.status === 200) {
          resolve(this);
        } else {
          reject(this);
        }
      } catch (e) {
        reject(e);
      }
    };

    xhr.onerror = function () {
      reject(this);
    };

    xhr.send();
  });
}

// driver code
fetchData('https://pokeapi.co/api/v2/pokemon/ditto')
  .then((data) => {
    console.log(data);
  })
  .catch((err) => console.log(err));
