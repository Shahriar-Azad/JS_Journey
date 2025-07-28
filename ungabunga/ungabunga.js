// const emojis = ["😎", "🚀", "🔥", "✨", "🎉", "🍕", "🐱‍👤", "💻", "🧠"];
// function getRandomEmoji() {
//   return emojis[Math.floor(Math.random() * emojis.length)];
// }

// console.log("Here's a random emoji for you:", getRandomEmoji());


// const numbers = [1, 2, 3];
// const doubled = numbers.customMap(num => num * 2);
// console.log(doubled); // [2, 4, 6]


// Array.prototype.customMap = function (callback) {
//   const result = [];
//   for (let i = 0; i < this.length; i++) {
//     result.push(callback(this[i], i, this));
//   }
//   return result;
// };


// Example
// const log = debounce(() => console.log("Typing stopped..."), 1000);
// window.addEventListener("keydown", log);

// function debounce(fn, delay) {
//   let timeoutId;
//   return function (...args) {
//     clearTimeout(timeoutId);
//     timeoutId = setTimeout(() => fn.apply(this, args), delay);
//   };
// }


// let clickCount = 0;
// document.addEventListener('click', () => {
//   clickCount++;
//   if (clickCount % 2 === 0) {
//     console.log(`Clicked an even number of times: ${clickCount}`);
//   }
// });


// document.addEventListener('keypress', (event) => {
//   const key = event.key;
//   if (!isNaN(key) && Number(key) % 2 === 0) {
//     console.log(`You pressed an even number key: ${key}`);
//   }
// });


// let count = 0;
// document.addEventListener('click', () => {
//   count++;
//   if (count % 2 === 0) console.log('Even click:', count);
// });


// 2. Keydown event, logs only if pressed key is an even number
// document.addEventListener('keydown', (e) => {
//   const key = e.key;
//   if (!isNaN(key) && Number(key) % 2 === 0) {
//     console.log('Even number key pressed:', key);
//   }
// });


// let addCount = 0;
// document.addEventListener('click', () => {
//   addCount++;
//   if (addCount % 2 === 0) {
//     console.log(`Clicked an even number of times: ${addCount}`);
//   }
// });



// document.addEventListener('keypress', (event) => {
//   const key = event.key;
//   if (!isNaN(key) && Number(key) % 2 === 0) {
//     console.log(`You pressed an even number key: ${key}`);
//   }
// });


// let count = 0;
// document.addEventListener('click', () => {
//   count++;
//   if (count % 2 === 0) console.log('Even click:', count);
// });


// document.addEventListener('keydown', (e) => {
//   const key = e.key;
//   if (!isNaN(key) && Number(key) % 2 === 0) {
//     console.log('Even number key pressed:', key);
//   }
// });



const divs = document.querySelectorAll('div');
divs.forEach((div, i) => {
  if ((i + 1) % 2 === 0) {
    div.addEventListener('mouseover', () => {
      console.log('Hovered on even div index:', i);
    });
  }
});