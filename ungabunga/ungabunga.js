const emojis = ["😎", "🚀", "🔥", "✨", "🎉", "🍕", "🐱‍👤", "💻", "🧠"];
function getRandomEmoji() {
  return emojis[Math.floor(Math.random() * emojis.length)];
}

console.log("Here's a random emoji for you:", getRandomEmoji());