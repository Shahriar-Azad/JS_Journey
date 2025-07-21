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


function debounce(func, delay) {
  let timeoutId;

  return function(...args) {
    // Clear the previous timer
    clearTimeout(timeoutId);

    // Set a new timer
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}
