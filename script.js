// Assignment Code
var letters = "abcdefghijklmnopqrstuvwxyz";
var uLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var symbols = "!@#$%^&*+=";

function generatePassword () {
    var possibleChar = "";
    var complete = "" ;
    var passwordLength = prompt("How many characters would you like in the password?");

    if (passwordLength >= 8 === passwordLength >= 128){
      prompt("Password length must be between 8 and 128 characters!");
  }
  
    var upper = confirm("Would you like upper case?");
    var lower = confirm("Would you like lower case?");
    var number = confirm("Would you like numbers?");
    var symbol = confirm("Would you like symbols?");

    if (upper){
      possibleChar += uLetters;
    }

    if (lower){
      possibleChar += letters;
    }

    if (number){
      possibleChar += numbers;
    }

    if (symbol){
      possibleChar += symbols;
    }
}





var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

