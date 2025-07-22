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

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);


