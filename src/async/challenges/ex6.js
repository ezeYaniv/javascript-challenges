// Write a utility which prints numbers starting from an initial value and increment in steps which can be started and stopped by the user, any number of times
// The functionality to start and stop can be exposed from a function which internally takes care of incrementing and displaying data
// setInterval can be used to achieve the task and handle the start & stop of data display

// setInterval example
function utilityPrint(startNum, stepSize) {
  let currNum = startNum;
  let isPaused = false;

  function printNums() {
    if (!isPaused) {
      console.log(currNum);
      currNum += stepSize;
    }
  }

  let interval = setInterval(printNums, 500);
}

// utilityPrint(3, 2);

// Generator function example
function runGeneratorPrint() {
  let isPaused = false;

  function* utilPrint(startNum, stepSize) {
    let currNum = startNum;

    while (!isPaused) {
      console.log('is not paused');
      yield currNum;
      currNum += stepSize;
    }
  }

  setTimeout(() => {
    isPaused = true;
    console.log('set isPaused to true!');
    console.log('interval cleared!');
    // clearInterval(interval); // this is commented out in case we want to completely exit the interval
  }, 3000);

  // this restarts the interval
  setTimeout(() => {
    isPaused = false;
  }, 5000);

  let gen = utilPrint(3, 2);

  let interval = setInterval(() => {
    if (!isPaused) {
      console.log(gen.next().value);
    }
  }, 500);
}

runGeneratorPrint();
