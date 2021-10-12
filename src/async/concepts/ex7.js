/* 
Cancel a fetch request
  AbortController is an interface which can be used to abort a fetch request
  signal object of the AbortController object can be used as the part of the argument to fetch and abort on controller object can be used to stop the request
*/

const controller = new AbortController();
const signal = controller.signal;

function fetchReq(url, params) {
  fetch(url, params)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((err) => console.log('caught an error', err));

  setTimeout(() => {
    controller.abort();
  }, 1000);
}

fetchReq('https://pokeapi.co/api/v2/pokemon/ditto', {
  signal,
  headers: {
    'Content-Type': 'application/json',
  },
  method: 'GET',
});
