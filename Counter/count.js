// const increaseBtn = document.getElementById('btn-1')
// const decreaseBtn = document.getElementById('btn-2')
// const resetBtn = document.getElementById('btn-3')

// const countLabel = document.getElementById('countLabel')


// let count = 0;

// increaseBtn.onclick = function(){
//     count++;
//     countLabel.textContent = count;
// }

const btnOne = document.querySelector('.btn-1');
const btnTwo = document.querySelector('.btn-2');
const btnThree = document.querySelector('.btn-3');
const countLabel = document.getElementById('countLabel')

let count = 0;


function increment(){
    count +=1;
    countLabel.textContent = count;

}
function decrement(){
    if(count>0){
        count -=1;

    }
    countLabel.textContent = count;

}
function reset(){
    count = 0;
    countLabel.textContent = count;

}