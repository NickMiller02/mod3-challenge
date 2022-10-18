// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function randomInt(min, max) {
    if (!max) {
        max = min
        min = 0
    }

    var rand = Math.random()
    return Math.floor(min*(1 - rand) + rand*max)
}

function getRandomItem(list) {
    return list[randomInt(list.length)]
}

//Generation Function

function generatePassword () {

    //User Prompts

    var userInput = window.prompt("How many characters would you want your password?")

    var passwordLength = parseInt(userInput)

    if (userInput === null) {
        return
    }

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

    //Character Variables

    var lowercaseList = [String.fromCharCode(Math.floor(Math.random() * 26) + 97)]
    var uppercaseList = []
    var numberList = [String.fromCharCode(Math.floor(Math.random() * 10) + 48)]
    var symbolList = ["!", "@", "#", "$", "%", "?", "^", "&"]

    // var lowercaseList = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    // var uppercaseList = []
    // var numberList = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
    // var symbolList = ["!", "@", "#", "$", "%", "?", "^", "&"]

    var optionsCart = []
    
    for (var i = 0; i < lowercaseList.length; i++) {
        uppercaseList[i] = lowercaseList[i].toUpperCase()
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

    if (optionsCart.length === 0) {
        optionsCart.push(lowercaseList)
    }

    var generatedPassword = ""
    
    for (var i = 0; i < passwordLength; i++) {
        var randomList = getRandomItem(optionsCart)
        var randomChar = getRandomItem(randomList)
        generatedPassword += randomChar
    }
    
    return generatedPassword
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)


