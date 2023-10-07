// Psudo code:
// User clicks the Generate Password button (id="generate" class="btn")

// User is prompted to specify length of password (range 8 - 128 characters). This input must be validaded to ensure it is correct range. Assign value to passwordLength use if statement to say if (passwordLength > 8 || passwordLength < 128) --> tell user invalid input new number
      // let passwordLenth = prompt("How long would you like your password to be? Please enter a number 8 - 128.");

      // if (passwordLenth < 8 || passwordLenth > 128){
      //   passwordLenth = prompt("Please enter a number 8 - 128.");
      // }

// User is presented with a list of password criteria that include: lowercase, uppercase, numeric, and/or special characters. Check box with options or maybe a list to choose from

// Console log the chosen criteria. Ensure at least one criteria is selected. Provide an error if no options were chosen or if incorrect input

// Once all prompts are provided the pasword is generated.

// Generated password is displayed in text area


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// This generates the password by asking the user to input a value and ensuring the number is a value between 8-128
function generatePassword () {
  let passwordLength = parseInt(window.prompt("How long would you like your password to be? Please enter a number 8 - 128."));
  console.log(passwordLength);
  let lowercaseCriteriaArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  let uppercaseCriteriaArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  let numericCriteriaArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  let specialcharacterCriteriaArr = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '^', '_', '`', '{', '|', '}', '~']; 
  // I do not know how to include: '\', ']',

  let finalPassword = "";

  let includeLowercase = window.prompt("Would you like to include lower case letters?");
  console.log(includeLowercase);
  if (includeLowercase === 'yes' || includeLowercase === "y"){
    finalPassword = lowercaseCriteriaArr[Math.floor(Math.random() * 26)];
    console.log(finalPassword);
  }
  
  let includeUppercase = window.prompt("Would you like to include upper case letters?");
  console.log(includeLowercase);
  if (includeLowercase === 'yes' || includeLowercase === "y"){
    finalPassword = uppercaseCriteriaArr[Math.floor(Math.random() * 26)];
    console.log(finalPassword);
  }

  // let includeNumeric
  // let includeSpecial

  if (passwordLength < 8 || passwordLength > 128){
    window.alert("Please enter a number 8 - 128.");
    generatePassword();
  } 
  
  // else if (typeof passwordLength !== Number) {
  //     window.alert("Please enter a number 8 - 128.");
  //     generatePassword();
  //   }
}
  // else if (passwordLength !== Number) {
  //   window.alert("Please enter a number 8 - 128.");
  //   generatePassword();
  // }

  // To create a random number I will use math floor and random
  // password = Math.floor(Math.random() * 10);

  // This will be used to go through array and
  // let printPassword = "";
  // if (i = 0 , i < passwordLength, i++) {
  //   printPassword += Math.floor(Math.random() * 10);
  //   console.log(printPassword);
  //   return;
  // }

// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);