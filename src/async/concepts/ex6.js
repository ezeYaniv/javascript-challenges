/*
Make a fetch request to retrieve and store JSON data from server

    Fetch API is provided by the browser which returns a promise
    Fetch takes url as the 1st argument and an object with request details as 2nd optional argument
    Response is a streamable object and hence we will have to invoke JSON / text method on it which returns promise which settles to the data

*/

function fetchJson(url, options) {
  fetch(url, options)
    .then((response) => response.json())
    .then((data) => data)
    .catch((err) => console.log(err));
}

fetchJson('https://pokeapi.co/api/v2/pokemon/ditto', { method: 'GET' });
