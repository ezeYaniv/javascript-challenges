/*
Show the execution of 3 asynchronous block of code, one after the other in sequence

- The asynchronous block of code can be a function which executes asynchronously
- The execution of such function can be simulated using setTimeout to with delay and execute different blocks of code inside each
*/

function asyncInSequence() {
    setTimeout(() => {
        console.log('im number 1, 2000')
        setTimeout(() => {
            console.log('im number 2, 1000')
            setTimeout(() => {
                console.log('im number 3, 500')
            }, 500)
        }, 1000)
    }, 2000)
}

asyncInSequence();
