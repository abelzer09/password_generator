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
      prompt("Password length must be between 8 and 128 characters!")
  }
  console.log(passwordLength)
 }

// if (passwordLength >= 8 === passwordLength >= 128){
//     prompt("Password length must be between 8 and 128 characters!")
// }




var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

