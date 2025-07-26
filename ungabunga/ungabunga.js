// const emojis = ["😎", "🚀", "🔥", "✨", "🎉", "🍕", "🐱‍👤", "💻", "🧠"];
// function getRandomEmoji() {
//   return emojis[Math.floor(Math.random() * emojis.length)];
// }

// console.log("Here's a random emoji for you:", getRandomEmoji());


// const numbers = [1, 2, 3];
// const doubled = numbers.customMap(num => num * 2);
// console.log(doubled); // [2, 4, 6]


Array.prototype.customMap = function (callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this));
  }
  return result;
};