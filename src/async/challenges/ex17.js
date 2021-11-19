/*
Create a generator to return a random number on every request

    The generation of random number can be implemented in the normal way in the function but will returned and function yields
    The function will again continue to execute in loop to return a new random number
*/

function* randomNumber(num) {
  let index = 0;

  while (index < num) {
    yield Math.floor(Math.random() * 100);
    index++;
  }
}

const gen = randomNumber(6);
let flag = gen.next();

while (!flag.done) {
  console.log(flag.value);
  flag = gen.next();
}

console.log('Finish');
