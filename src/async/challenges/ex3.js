// Print numbers from 1 to 10 with delay of 1 second between each value being printed

function printing() {
  let interval;
  let num = 1;

  interval = setInterval(print, 1000);

  function print() {
    console.log(num);
    num++;
    if (num === 5) clearInterval(interval);
  }
}
printing();
