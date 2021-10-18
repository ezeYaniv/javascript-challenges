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
