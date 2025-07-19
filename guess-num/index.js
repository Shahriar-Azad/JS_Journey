const min = 1;
const max = 100;

const userNumber = window.prompt("Enter any number from 1-100");

console.log(userNumber);


luckyNumber = 77;

if(userNumber > 100){
    console.log("Please enter number between 1-100 range")

}

else if (userNumber == 77){
    console.log(`Woah you have guessed the lucky number which is ${luckyNumber}`)
}
else{
    console.log(`Unfortunately ${userNumber} is not the lucky number`)
}