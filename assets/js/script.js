// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Check for password criteria via prompts
function generatePassword() {
  var promptLength = window.prompt('Input a password length between 8 and 128 characters.')
  var promptLowercase = window.prompt('Do you want lowercase letters? Enter "YES" or "NO" to choose')
  var promptUppercase = window.prompt('Do you want uppercase letters? Enter "YES" or "NO" to choose')
  var promptNumeric = window.prompt('Do you want numeric characters? Enter "YES" or "NO" to choose')
  var promptSpecial = window.prompt('Do you want special characters? Enter "YES" or "NO" to choose')

  // check if inputs are empty (validate)
  while (promptLength === "" || promptLength === null) {
    alert("You did not input a valid option. Try again!");
    return "please answer the password criteria correctly in order to obtain a password";
  }
  // check that the password length is correct
  while (promptLength < 8 || promptLength > 128) {
    alert("You did not input a valid option. Try again!");
    return "please answer the password criteria correctly in order to obtain a password";
  }
  // check if inputs are empty (validate)
  while (promptLowercase === "" || promptLowercase === null) {
    alert("You did not input a valid option. Try again!");
    return "please answer the password criteria correctly in order to obtain a password";
  }
  // check if inputs are empty (validate)
  while (promptUppercase === "" || promptUppercase === null) {
    alert("You did not input a valid option. Try again!");
    return "please answer the password criteria correctly in order to obtain a password";
  }
  // check if inputs are empty (validate)
  while (promptNumeric === "" || promptNumeric === null) {
    alert("You did not input a valid option. Try again!");
    return "please answer the password criteria correctly in order to obtain a password";
  }
  // check if inputs are empty (validate)
  while (promptSpecial === "" || promptSpecial === null) {
    alert("You did not input a valid option. Try again!");
    return "please answer the password criteria correctly in order to obtain a password";
  }

  promptLowercase = promptLowercase.toLowerCase();
  promptUppercase = promptUppercase.toLowerCase();
  promptNumeric = promptNumeric.toLowerCase();
  promptSpecial = promptSpecial.toLowerCase();

}

function querySelector() {
  // check for password input 

    if (promptLowercase === "yes") {
      String.fromCharCode = (97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122)
    }

    else if (promptUppercase === "yes") {
      String.fromCharCode = (65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90)
    }

    else if (promptNumeric === "yes") {
      String.fromCharCode = (48, 49, 50, 51, 52, 53, 54, 55, 56, 57)
    }

    else if (promptSpecial === "yes") {
      String.fromCharCode = (33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 58, 59, 60, 61, 62, 63, 64, 91, 92, 93, 94, 95, 96, 123, 124, 125, 126)
    }

  for (var i = 0; i = promptLength; i++) {
    var password = Math.random(promptLowercase, promptUppercase, promptNumeric, promptSpecial);
  }

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
