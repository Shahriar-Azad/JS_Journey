function palindrome(str){
    let reversed = "";
    for(let i = str.length - 1; i >= 0; i-- ){
        reversed += str[i];
        

    }

    if(str === reversed){
        return true;
    }
    else {
        return false;
    }

}

console.log(palindrome("racecar"));