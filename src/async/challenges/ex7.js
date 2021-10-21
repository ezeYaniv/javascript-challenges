/*
Execute an array of asynchronous functions one after the other in sequence using callbacks

    The asynchronous function can be simulated using setTimeout which executes the callback
    The array of functions execution can be managed by having a function which takes care of execution of all the async functions
    Asynchronous functions need not be aware of the function to be executed and will take a callback as argument and execute it after completion

*/

const timer1 = () => setTimeout(func1, 1000);
const func1 = () => console.log('func1');

const timer2 = () => setTimeout(func2, 3000);
const func2 = () => console.log('func2');

const timer3 = () => setTimeout(func3, 2000);
const func3 = () => console.log('func3');

[timer1, timer2, timer3].forEach((fn) => fn());
