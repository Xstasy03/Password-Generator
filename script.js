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
    "choose a number of characters between 8 and 128!"
  );

    // Add event listener to generate button //
  generateBtn.addEventListener("click", writePassword);}
