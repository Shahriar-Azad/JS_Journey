// just to commit nothing else-------


let clickCount = 0;
document.addEventListener('click', () => {
  clickCount++;
  if (clickCount % 2 === 0) {
    console.log(`Clicked an even number of times: ${clickCount}`);
  }
});