// Assignment code here
var characters;
var passwordLength;
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  passwordLength = window.prompt("Choose a password length (8-128 characters)");
  var lowercase = window.prompt(
    "Would you like to include LOWERCASE characters? Enter yes or no."
  );
  lowercase = lowercase.toLowerCase();

  var uppercase = window.prompt(
    "Would you like to include UPPERCASE characters? Enter yes or no."
  );
  uppercase = uppercase.toLowerCase();

  var numeric = window.prompt(
    "Would you like to include NUMERIC characters? Enter yes or no."
  );
  numeric = numeric.toLowerCase();

  var special = window.prompt(
    "Would you like to include SPECIAL characters? Enter yes or no."
  );
  var special = special.toLowerCase();

  if (lowercase === "yes") {
    characters = "abcdefghijklmnopqrstuvwxyz";
  }

  if (uppercase === "yes") {
    characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  if (numeric === "yes") {
    characters = "1234567890";
  }

  if (special === "yes") {
    characters = "!@#$%^&*()-_=+[{]}|;:',<.>/?`~";
  }

  if (lowercase === "yes" && uppercase === "yes") {
    characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  if (lowercase === "yes" && numeric === "yes") {
    characters = "abcdefghijklmnopqrstuvwxyz1234567890";
  }

  if (lowercase === "yes" && special === "yes") {
    characters = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()-_=+[{]}|;:',<.>/?`~";
  }

  if (uppercase === "yes" && numeric === "yes") {
    characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
  }

  if (uppercase === "yes" && special === "yes") {
    characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()-_=+[{]}|;:',<.>/?`~";
  }

  if (numeric === "yes" && special === "yes") {
    characters = "1234567890!@#$%^&*()-_=+[{]}|;:',<.>/?`~";
  }

  if (lowercase === "yes" && uppercase === "yes" && numeric === "yes") {
    characters =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ12345667890";
  }

  if (lowercase === "yes" && numeric === "yes" && special === "yes") {
    characters =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()-_=+[{]}|;:',<.>/?`~";
  }

  if (uppercase === "yes" && numeric === "yes" && special === "yes") {
    ("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()-_=+[{]}|;:',<.>/?`~");
  }

  if (
    lowercase === "yes" &&
    uppercase === "yes" &&
    numeric === "yes" &&
    special === "yes"
  ) {
    characters =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ12345667890!@#$%^&*()-_=+[{]}|;:',<.>/?`~";
  }
  // debugger;
}
var generatePassword = function (length) {
  let result = " ";
  const charactersLength = passwordLength;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
};
var password = generatePassword(passwordLength);
var passwordText = document.querySelector("#password");
console.log(8);
passwordText.value = password;
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
