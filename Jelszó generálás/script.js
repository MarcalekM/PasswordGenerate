function generate(){
    //console.log("Szeva Saga!")
    let length = document.getElementById("length").value;
    let includeLowerCase = document.getElementById("lowercase").checked;
    let includeUpperCase = document.getElementById("uppercase").checked;
    let includeNumbers = document.getElementById("numbers").checked;
    let includeSymbols = document.getElementById("symbols").checked;
    let password = generatePassword(length, includeLowerCase, includeUpperCase, includeNumbers, includeSymbols);
    document.getElementById("password").innerHTML = password;
}

function generatePassword(length, includeLowerCase, includeUpperCase, includeNumbers, includeSymbols){
    let lowercase = 'abcdefghijklmnopqrstuvwxyz';
    let uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let numbers = '0123456789';
    let symbols = '!@#$%^&*_=+-/.?<>)';

    let password = '';
    let characters = '';

    if(includeLowerCase){
        characters += lowercase;
    }
    if(includeUpperCase){
        characters += uppercase;
    }
    if(includeNumbers){
        characters += numbers;
    }
    if(includeSymbols){
        characters += symbols;
    }

    for(let index = 0; index < length; index++){
        password += characters[Math.floor(Math.random() * characters.length)];
    }
    
    return password
}