// Problem-01:

// function palindrome(str){
//     let reversed = "";
//     for(let i = str.length - 1; i >= 0; i-- ){
//         reversed += str[i];
        

//     }

//     if(str === reversed){
//         return true;
//     }
//     else {
//         return false;
//     }

// }

// console.log(palindrome("racecar"));




// Problem-02:


// function debounce(func, delay) {
//   let timeoutId;

//   return function(...args) {
//     // Clear the previous timer
//     clearTimeout(timeoutId);

//     // Set a new timer
//     timeoutId = setTimeout(() => {
//       func.apply(this, args);
//     }, delay);
//   };
// }


// function createCounter() {
//   let count = 0; // this variable is "remembered" by the inner function

//   return function () {
//     count += 1;
//     return count;
//   };
// }

// // Create a counter
// const counter = createCounter();

// console.log(counter()); // 1
// console.log(counter()); // 2
// console.log(counter()); // 3


// function customMap(array, callback) {
//   let result = [];

//   // Loop through each element in the array
//   for (let i = 0; i < array.length; i++) {
//     // Call the callback on each element and push to result
//     result.push(callback(array[i], i, array));
//   }

//   return result;
// }




// function memoize(fn) {
//   const cache = {}; // store previous results

//   return function (...args) {
//     const key = JSON.stringify(args); // convert arguments to a unique key

//     if (cache[key]) {
//       console.log("Returning from cache for:", key);
//       return cache[key];
//     }

//     const result = fn.apply(this, args);
//     cache[key] = result;
//     return result;
//   };
// }


// const original = {
//   name: "Azad",
//   details: {
//     age: 22,
//     city: "Dhaka"
//   }
// };

// // Shallow copy using Object.assign
// const shallowCopy = Object.assign({}, original);

// // Modify nested property
// shallowCopy.details.city = "Chittagong";

// console.log(original.details.city); // "Chittagong" 😬 (original is affected!)



// import React, { useState } from "react";
// import "./TodoApp.css";

// function App() {
//   const [task, setTask] = useState("");
//   const [todos, setTodos] = useState([]);

//   const addTask = (e) => {
//     e.preventDefault();
//     if (task.trim() === "") return;
//     setTodos([...todos, { text: task, completed: false }]);
//     setTask("");
//   };

//   const toggleComplete = (index) => {
//     const newTodos = [...todos];
//     newTodos[index].completed = !newTodos[index].completed;
//     setTodos(newTodos);
//   };

//   const deleteTask = (index) => {
//     const newTodos = todos.filter((_, i) => i !== index);
//     setTodos(newTodos);
//   };

//   return (
//     <div className="todo-container">
//       <h2>📝 To-Do App</h2>
//       <form onSubmit={addTask}>
//         <input
//           type="text"
//           placeholder="Enter a task..."
//           value={task}
//           onChange={(e) => setTask(e.target.value)}
//         />
//         <button type="submit">Add</button>
//       </form>

//       <ul>
//         {todos.map((todo, index) => (
//           <li key={index} className={todo.completed ? "completed" : ""}>
//             <span onClick={() => toggleComplete(index)}>{todo.text}</span>
//             <button onClick={() => deleteTask(index)}>❌</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;


// index.js:

// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />);


// import React, { useState } from 'react';

// function App() {
//   const [count, setCount] = useState(0); // initial state is 0

//   const increase = () => setCount(count + 1);
//   const decrease = () => setCount(count - 1);
//   const reset = () => setCount(0);

//   return (
//     <div style={styles.container}>
//       <h2>🔢 Simple Counter</h2>
//       <h1>{count}</h1>
//       <div>
//         <button onClick={increase} style={styles.button}>Increase</button>
//         <button onClick={decrease} style={styles.button}>Decrease</button>
//         <button onClick={reset} style={styles.button}>Reset</button>
//       </div>
//     </div>
//   );
// }

// const styles = {
//   container: {
//     textAlign: 'center',
//     marginTop: '50px',
//     fontFamily: 'sans-serif'
//   },
//   button: {
//     margin: '10px',
//     padding: '10px 20px',
//     fontSize: '16px',
//     borderRadius: '5px',
//     border: 'none',
//     backgroundColor: '#4caf50',
//     color: 'white',
//     cursor: 'pointer'
//   }
// };

// export default App;



// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);


// just to commit----->


// function add(a,b){
//     return a + b;
// }

// add(10,20)


// function sub(a,b){

//     return a - b;

// }


// sub(20,10)




// function mul(a,b){
//     return a * b;
// }

// mul(10,20)



// const quotes = [
//   "Stay hungry, stay foolish.",
//   "Code is like humor. When you have to explain it, it’s bad.",
//   "First, solve the problem. Then, write the code.",
//   "Experience is the name everyone gives to their mistakes.",
//   "JavaScript: the world's most misunderstood programming language."
// ];

// const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
// console.log("💬 Random Quote:", randomQuote);


// function isPalindrome(str) {
//   const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");
//   return cleaned === cleaned.split("").reverse().join("");
// }

// console.log(isPalindrome("A man, a plan, a canal, Panama")); // true
// console.log(isPalindrome("hello")); // false



function debounce(fn, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(this, args), delay);
  };
}

// Example
const log = debounce(() => console.log("Typing stopped..."), 1000);
window.addEventListener("keydown", log);
