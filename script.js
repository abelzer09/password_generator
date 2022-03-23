// Assignment Code
var letters = "abcdefghijklmnopqrstuvwxyz";
var uLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var symbols = "!@#$%^&*+=";

function generatePassword () {
    var possibleChar = "";
    var complete = '' ;
    var passwordLength = prompt("how many characters would you like in the passowrd?");
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
