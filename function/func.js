// function add(x,y){
//     return x+y
// }
// function subtract(x,y){
//     return x-y
// }
// function multiply(x,y){
//     return x*y
// }
// function divide(x,y){
//     return Math.floor(x/y)
// }


// console.log(divide(5,2))


// function isEven(number){
//     return number % 2 === 0 ? true : false;
// }

// console.log(isEven(10))




// function isValidEmail(mail){
//     if(mail.includes("@")){
//         return true;
//     }
//     else{
//         return false;
//     }
// }



// console.log(isValidEmail("bro123@gmail.com"));


// function isValidEmail(email){
//     return email.includes("@") ? true : false
// }


// console.log(isValidEmail("bro123@gmail.com"))


// just to commit on github----->

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



const divs = document.querySelectorAll('div');
divs.forEach((div, i) => {
  if ((i + 1) % 2 === 0) {
    div.addEventListener('mouseover', () => {
      console.log('Hovered on even div index:', i);
    });
  }
});


window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  if (scrollY % 2 === 0) {
    console.log('Even scroll position:', scrollY);
  }
});