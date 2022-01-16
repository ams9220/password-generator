// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var promptLength = window.prompt('Input a password length between 8 and 128 characters.')
  var promptLowercase = window.prompt('Do you want lowercase letters? Enter "YES" or "NO" to choose')
  var promptUppercase = window.prompt('Do you want uppercase letters? Enter "YES" or "NO" to choose')
  var promptNumeric = window.prompt('Do you want numeric characters? Enter "YES" or "NO" to choose')
  var promptSpecial = window.prompt('Do you want special characters? Enter "YES" or "NO" to choose')
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
