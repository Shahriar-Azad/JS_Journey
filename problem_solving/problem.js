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




function memoize(fn) {
  const cache = {}; // store previous results

  return function (...args) {
    const key = JSON.stringify(args); // convert arguments to a unique key

    if (cache[key]) {
      console.log("Returning from cache for:", key);
      return cache[key];
    }

    const result = fn.apply(this, args);
    cache[key] = result;
    return result;
  };
}



