/*
Search for the presence of a given value in the nested object using generator
  With the help of generator Inversion of control is possible
  Instead of function seaching for the key by passing the callback or key, the logic can be implemented in the controlling code
  For..of loop calling the recursive generator function on object can be used to achieve this
*/

function* searchNestedGen(obj, givenKey) {
  if (obj[givenKey]) {
    console.log(obj[givenKey]);
    return obj[givenKey];
  }
  for (let property in obj) {
    if (Object.prototype.toString.call(obj[property]) == '[object Object]') {
      yield* searchNestedGen(obj[property], givenKey);
    }
  }
}

function searchNestedRecursive(obj, givenKey) {
  if (obj[givenKey]) {
    console.log(obj[givenKey]);
    return obj[givenKey];
  }
  for (let property in obj) {
    if (Object.prototype.toString.call(obj[property]) == '[object Object]') {
      searchNestedRecursive(obj[property], givenKey);
    }
  }
}

const obj = {
  name: 'John',
  age: 15,
  school: {
    location: 'england',
    size: {
      grade1: 100,
      grade2: 200,
    },
  },
};

let gen = searchNestedGen(obj, 'location');
let result = gen.next();
while (!result.done) {
  console.log(result);
  result = gen.next();
}

// searchNestedRecursive(obj, 'location');
