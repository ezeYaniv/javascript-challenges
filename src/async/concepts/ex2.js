/*
Write a code to make xmlHTTPRequest to get data from the server asynchronously
- XMLHttpRequest (XHR) objects are used to interact with server to retrieve data from a URL without having to do a full page refresh
- XHR requests can be initiated by creating the object and providing the arguments such as 'method', url etc
- The success and failure of the request can be managed by callbacks
*/

function getData() {
	const url = 'https://pokeapi.co/api/v2/pokemon/ditto';
	const req = new XMLHttpRequest();

	req.addEventListener("load", () => {
    const response = req.response;
    console.log(response);
  })
  req.open('GET', url);
	req.send();
}

getData();