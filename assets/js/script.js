// Assignment Code
var letters = "abcdefghijklmnopqrstuvwxyz";
var uLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var symbols = "!@#$%^&*+=";

function generatePassword() {
  var possibleChar = "";
  var complete = "";
  var passwordLength = prompt("How many characters would you like in the password? (min 8 max 128)");

  if (passwordLength < 8 || passwordLength > 128) {
    alert("Password length must be between 8 and 128 characters!");
    return null;
  }

  var upper = confirm("Would you like upper case letters?");
  var lower = confirm("Would you like lower case letters?");
  var number = confirm("Would you like numbers?");
  var symbol = confirm("Would you like special characters?");

  if (upper) {
    possibleChar += uLetters;
  }

  if (lower) {
    possibleChar += letters;
  }

  if (number) {
    possibleChar += numbers;
  }

  if (symbol) {
    possibleChar += symbols;
  }

  if (possibleChar < 8) {
    alert("At least one character type must be selected.");
    return null;
  }

  for (var i = 0; i < passwordLength; i++) {
    complete += possibleChar.charAt(Math.floor(Math.random() * possibleChar.length));
  }
  return complete;
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

