// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var promptLength = window.prompt('Input a password length between 8 and 128 characters.')
  var promptLowercase = window.prompt('Do you want lowercase letters? Enter "YES" or "NO" to choose')
  var promptUppercase = window.prompt('Do you want uppercase letters? Enter "YES" or "NO" to choose')
  var promptNumeric = window.prompt('Do you want numeric characters? Enter "YES" or "NO" to choose')
  var promptSpecial = window.prompt('Do you want special characters? Enter "YES" or "NO" to choose')

  // check if inputs are empty (validate)
  while (promptLength === "" || promptLength === null) {
    alert("You did not input a valid option. Try again!");
    return "undefined : please answer the password criteria correctly in order to obtain a password 🤪";
  }
  // check that the password length is correct
  while (promptLength < 8 || promptLength > 128) {
    alert("You did not input a valid option. Try again!");
    return "undefined : please answer the password criteria correctly in order to obtain a password 🤪";
  }
  // check if inputs are empty (validate)
  while (promptLowercase === "" || promptLowercase === null) {
    alert("You did not input a valid option. Try again!");
    return "undefined : please answer the password criteria correctly in order to obtain a password 🤪";
  }
  // check if inputs are empty (validate)
  while (promptUppercase === "" || promptUppercase === null) {
    alert("You did not input a valid option. Try again!");
    return "undefined : please answer the password criteria correctly in order to obtain a password 🤪";
  }
  // check if inputs are empty (validate)
  while (promptNumeric === "" || promptNumeric === null) {
    alert("You did not input a valid option. Try again!");
    return "undefined : please answer the password criteria correctly in order to obtain a password 🤪";
  }
  // check if inputs are empty (validate)
  while (promptSpecial === "" || promptSpecial === null) {
    alert("You did not input a valid option. Try again!");
    return "undefined : please answer the password criteria correctly in order to obtain a password 🤪";
  }
}

function querySelector() {

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
