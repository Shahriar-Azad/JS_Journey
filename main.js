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



// 3. Mouseover event on even-indexed divs (0-based)
// const divs = document.querySelectorAll('div');
// divs.forEach((div, i) => {
//   if ((i + 1) % 2 === 0) {
//     div.addEventListener('mouseover', () => {
//       console.log('Hovered on even div index:', i);
//     });
//   }
// });



// window.addEventListener('scroll', () => {
//   const scrollY = window.scrollY;
//   if (scrollY % 2 === 0) {
//     console.log('Even scroll position:', scrollY);
//   }
// });


// 3. Mouseover event on even-indexed divs (0-based)
const divs = document.querySelectorAll('div');
divs.forEach((div, i) => {
  if ((i + 1) % 2 === 0) {
    div.addEventListener('mouseover', () => {
      console.log('Hovered on even div index:', i);
    });
  }
});