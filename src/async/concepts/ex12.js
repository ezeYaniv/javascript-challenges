/*
Show me the working of a generator function

    Generators are functions that can be exited and later re-entered
    Generator function will have * after the keyword function
    Generator when called returns an iterator which can be used to call next on it
    yield keyword can be used inside such a function and stops the execution

*/

function* generatorFn() {
  yield 'first';
  return 'second';
  //yield 'third';
}

const gene = generatorFn();

console.log(gene.next());
console.log(gene.next());
//console.log(gene.return())
