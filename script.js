// Assignment code here //
var number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// Lowercase & Uppercase //
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = lowercase.map(function (x) {
  return x.toUpperCase();
});

// Symbols & Characters //
var specialcharacters = [" ", "!", "/", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  var passwordlength = prompt(
    "choose the amount of characters in your password between 8 and 100!"
  );
  while (true) {
    if (passwordlength === null) {
      return;
    }
    var failed = false;
    var input = number(passwordlength);
    console.log(typeof passwordlength);
    if (!/^[0-9]*$/.test(passwordlength)) {
      failed = true
    }
    if (input < 8 || input > 100) {
      failed = true;
    }
    if (failed === false) {
      break;
    }

    passwordlength = prompt(
      "Invalid input please select a number between 8 and 100 for amount of characters in password"
    );
  }

  // Add event listener to generate button //
  generateBtn.addEventListener("click", writePassword);