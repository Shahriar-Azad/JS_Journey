// just to commit nothing else-------


let clickCount = 0;
document.addEventListener('click', () => {
  clickCount++;
  if (clickCount % 2 === 0) {
    console.log(`Clicked an even number of times: ${clickCount}`);
  }
});





document.addEventListener('keypress', (event) => {
  const key = event.key;
  if (!isNaN(key) && Number(key) % 2 === 0) {
    console.log(`You pressed an even number key: ${key}`);
  }
});




let count = 0;
document.addEventListener('click', () => {
  count++;
  if (count % 2 === 0) console.log('Even click:', count);
});

// 2. Keydown event, logs only if pressed key is an even number
document.addEventListener('keydown', (e) => {
  const key = e.key;
  if (!isNaN(key) && Number(key) % 2 === 0) {
    console.log('Even number key pressed:', key);
  }
});