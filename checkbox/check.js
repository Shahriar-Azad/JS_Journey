const myCheckBox = document.getElementById('myCheckBox')
const visaBtn = document.getElementById('visaBtn')
const masterBtn = document.getElementById('masterBtn')
const paypalBtn = document.getElementById('paypalBtn')
const mySubmit = document.getElementById('mySubmit')
const subResult = document.getElementById('subResult')
const payResult = document.getElementById('payResult')


mySubmit.onclick = function(){
    if(myCheckBox.checked){
        subResult.textContent = `You are Subscribed!`
        
    }
    else{
        subResult.textContent = `You are not Subscribed!`
    }

    if(visaBtn.checked){
        payResult.textContent = `You are paying with Visa`
    }
    else if(masterBtn.checked){
        payResult.textContent = `You are paying with MasterCard`
    }
    else if(paypalBtn.checked){
        payResult.textContent = `You are paying with Paypal`
    }
    else {
        payResult.textContent = `Select any payment method`
    }
}




// Switch case example:


// let score = window.prompt("Enter your grade:");

// let grade;

// switch (true) {
//     case score >= 90:
//         grade = "A"
        
//         break;
//     case score >= 80:
//         grade = "B"
        
//         break;
//     case score >= 70:
//         grade = "C"
        
//         break;
//     case score >= 60:
//         grade = "D"
        
//         break;


//     default:
//         grade = "F"
//         break;
// }