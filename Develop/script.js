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

  // If a password length is added that is too short or long this will prompt the user to enter a number between 8-128
  if (passwordLength < 8 || passwordLength > 128){
    window.alert("Please enter a number 8 - 128.");
    generatePassword();
  } 

  let finalPasswordArray = []; //This will be the arry to hold characters from all selected arrays
  let finalPassword = ""; // Variable to store the final password string

  let includeLowercase = window.prompt("Would you like to include lower case letters in your password?");
  includeLowercase = includeLowercase.toLowerCase();
  if (includeLowercase === "yes" || includeLowercase === "y"){
    finalPasswordArray.push(...lowercaseCriteriaArr);
    // finalPassword = finalPassword.concat(lowercaseCriteriaArr[Math.floor(Math.random() * lowercaseCriteriaArr.length)]);
    // console.log(finalPassword);
  } else if (includeLowercase === "no" || includeLowercase === "n") {
    alert("The password will not include lower case letters.");
  } else {
    includeLowercase = window.prompt("Would you like to include lower case letters in your password? Please respond with yes or no.");
  }
  // Added else if and else to ensure yes or no is entered
  
  
  let includeUppercase = window.prompt("Would you like to include upper case letters in your password?");
  includeUppercase = includeUppercase.toLowerCase();
  if (includeUppercase === "yes" || includeUppercase === "y"){
    finalPasswordArray.push(...uppercaseCriteriaArr);
    // finalPassword = finalPassword.concat(uppercaseCriteriaArr[Math.floor(Math.random() * uppercaseCriteriaArr.length)]);
    // console.log(finalPassword);
  } else if (includeUppercase === "no" || includeUppercase === "n") {
    alert("The password will not include upper case letters.");
  } else {
    includeUppercase = window.prompt("Would you like to include upper case letters in your password? Please respond with yes or no.");
  }

  let includeNumeric = window.prompt("Would you like to include numbers in your password?");
  includeNumeric = includeNumeric.toLowerCase();
  if (includeNumeric === "yes" || includeNumeric === "y"){
    finalPasswordArray.push(...numericCriteriaArr);
    // finalPassword = numericCriteriaArr[Math.floor(Math.random() * numericCriteriaArr.length)];
    // console.log(finalPassword);
  } else if (includeNumeric === "no" || includeNumeric === "n") {
    alert("The password will not include numbers.");
  } else {
    includeNumeric = window.prompt("Would you like to include numbers in your password? Please respond with yes or no.");
  }

  let includeSpecial = window.prompt("Would you like to include special characters in your password?");
  includeSpecial = includeSpecial.toLowerCase();
  if (includeSpecial === "yes" || includeSpecial === "y"){
    finalPasswordArray.push(...specialcharacterCriteriaArr);
    console.log(finalPasswordArray);
    // finalPassword = specialcharacterCriteriaArr[Math.floor(Math.random() * specialcharacterCriteriaArr.length)];
    // console.log("specialCharArr Length: " + specialcharacterCriteriaArr.length);
    // console.log(finalPassword);
  } else if (includeSpecial === "no" || includeSpecial === "n") {
    alert("The password will not include special characters.");
  } else {
    includeSpecial = window.prompt("Would you like to include special characters in your password? Please respond with yes or no.");
  }

  if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial){
    alert("You must say yes to one criteria");
  }

  // BUG TO FIX - write a statemen that if they do not choose one criteria they will need ot select one!!

  // This will take the passwordLength and loop through asssigning a random character from the arry that holds all the characters 
  
  let printPassword = "";
  for (var i = 0; i < passwordLength; i++) {
    printPassword += finalPasswordArray[Math.floor(Math.random() * finalPasswordArray.length)];
  }
  
  return printPassword;
  console.log(printPassword);
 
  
  // if () {
  //   printPassword += Math.floor(Math.random() * 10);
  //   console.log(printPassword);
  //   return;
  // }

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