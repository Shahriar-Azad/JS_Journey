// const title = document.getElementById('main-container');


// const listItem = document.getElementsByClassName('list-items');
// console.log(listItem);



// const listItem = document.getElementsByTagName('li');

// console.log(listItem);


// const container = document.querySelector('div');

// console.log(container); 


// const title = document.querySelector('#main-container');


// title.style.color = 'red';


// const listItems = document.querySelectorAll('.list-items');

// for(i=0; i<listItems.length; i++){
//     listItems[i].style.color = 'red';
// }



// const ul = document.querySelector('ul');

// const li = document.createElement('li');


// ul.append(li)

// li.innerHTML = 'hitman';
// li.innerHTML = 'gta 5';
// li.style.color = 'white';
// li.style.display = 'flex';
// li.style.justifyContent = 'center'

// li.setAttribute('class', 'list-items')

// li.removeAttribute('class')

// li.classList.add('list-items');




// const buttonThree = document.querySelector('.btn-3');

// function alertBtn(){
//     alert('hey how you doin?');
// }

// buttonThree.addEventListener("click", alertBtn);


// const newBackgroundColor = document.querySelector('.box-2');

// function changeBgColor(){
//     newBackgroundColor.style.backgroundColor = 'blue';
// }


// newBackgroundColor.addEventListener("mouseover", changeBgColor);


// const revealBtn = document.querySelector('.reveal-btn');

// const hiddenContent = document.querySelector('.hidden-content');


// function revealContent() {

// if(hiddenContent.classList.contains('reveal-btn')){
    
//         hiddenContent.classList.remove('reveal-btn')
        
//     } else{
//         hiddenContent.classList.add('reveal-btn')
//     }

// }

// revealBtn.addEventListener('click', revealContent);





// #####################################################################
// just to commit

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




// 1. Click event, logs only on even clicks
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