// const randomColor = () => `#${Math.floor(Math.random()*16777215).toString(16)}`;
// console.log(randomColor()); // #a3c4f2



// const shuffle = arr => arr.sort(() => Math.random() - 0.5);
// console.log(shuffle([1,2,3,4,5]));



// const isPrime = n => n > 1 && ![...Array(Math.sqrt(n)).keys()].slice(2).some(i => n % i === 0);
// console.log(isPrime(17));



// const debounce = (fn, delay) => {
//   let timer;
//   return (...args) => {
//     clearTimeout(timer);
//     timer = setTimeout(() => fn(...args), delay);
//   };
// };




// const deepClone = obj => JSON.parse(JSON.stringify(obj));
// const original = {a: 1, b: {c: 2}};
// const cloned = deepClone(original);



const getRandomItem = arr => arr[Math.floor(Math.random() * arr.length)];
console.log(getRandomItem(['apple', 'banana', 'cherry'])); 
