// Assignment code here

// I struggled with this assignment but I did not want to skip it. 
// I am aware that the majority of the grading criteria is missing and I plan on resubmitting it at a later point. 
// I used console.log() for my generatePassword() variables to show that the prompt responses were being recorded.


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

  console.log(promptLength);
  console.log(promptLowercase);
  console.log(promptUppercase);
  console.log(promptNumeric);
  console.log(promptSpecial);
}

function querySelector() {
  // check for password input 

  if (promptLowercase === "yes") {
    promptLowercase.input = (a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z)
  }

  else if (promptUppercase === "yes") {
    promptUppercase.input = (A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z)
  }

  else if (promptNumeric === "yes") {
    promptNumeric.input = (0, 1, 2, 3, 4, 5, 6, 7, 8, 9)
  }

  else if (promptSpecial === "yes") {

  }

  for (var i = 0; i < promptLength; i++) {

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
