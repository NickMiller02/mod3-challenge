// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword () {

    var userInput = window.prompt("How many characters would you want your password?")

    var passwordLength = parseInt(userInput)

    if (isNaN(passwordLength)) {
        window.alert("Please input a number!")
        return
    }

    if (passwordLength < 8 || passwordLength > 128) {
        window.alert("Password must be between 8 and 128 characters")
        return
    }

    var userWantsLowercase = window.confirm("Do you want to include lowercase letters?")
    var userWantsUppercase = window.confirm("Do you want to include uppercase letters?")
    var userWantsNumbers = window.confirm("Do you want to include numbers?")
    var userWantsSymbols = window.confirm("Do you want to include symbols?")

    var lowercaseList = [String.fromCharCode(Math.floor(Math.random() * 26) + 97)];
    var uppercaseList = [String.fromCharCode(Math.floor(Math.random() * 26) + 65)];
    var numberList = [String.fromCharCode(Math.floor(Math.random() * 10) + 48)];
    var symbolList = ["!", "@", "#", "$", "%", "?", "&"];

    var optionsCart = []
    
    for (var i = 0; i < lowercaseList,length; i++) {
    console.log(lowercaseList);
    }

    if (userWantsLowercase === true) {
        optionsCart.push(lowercaseList)
    }

    if (userWantsUppercase === true) {
        optionsCart.push(uppercaseList)
    }

    if (userWantsNumbers === true) {
        optionsCart.push(numberList)
    }

    if (userWantsSymbols === true) {
        optionsCart.push(symbolList)
    }
    
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)

//Generating Characters

