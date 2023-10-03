// User clicks the Generate Password button (id="generate" class="btn")

// User is prompted to specify length of password (range 8 - 128 characters). This input must be validaded to ensure it is correct range. Assign value to passwordLength use if statement to say if (passwordLength > 8 || passwordLength < 128) --> tell user invalid input new number

// User is presented with a list of password criteria that include: lowercase, uppercase, numeric, and/or special characters. Check box with options or maybe a list to choose from

// Console log the chosen criteria. Ensure at least one criteria is selected. Provide an error if no options were chosen or if incorrect input

// Once all prompts are provided the pasword is generated.

// Generated password is displayed in an alert message


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
