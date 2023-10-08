// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Global variable for passwordLength that an be passed into future functions
let passwordLength;

// This generates the password by asking the user to input a value and ensuring the number is a value between 8-128
function askPasswordLength() {
  passwordLength = parseInt(
    window.prompt("How long would you like your password to be? Please enter a number 8 - 128.")
  );

  if (isNaN(passwordLength)) {
    alert("Please enter a number.");
    askPasswordLength();
  } else if (passwordLength < 8 || passwordLength > 128) {
    alert("The number must be between 8 and 128.");
    askPasswordLength();
  } else if (passwordLength > 7 && passwordLength < 129) {
    alert("The password will be " + passwordLength + " characters long.");
  }
}

// generatePassword() calls askPasswordLength() to get the length and then creates one array with all selected criteria that will be used to create a random password.
function generatePassword() {
  askPasswordLength();
  let lowercaseCriteriaArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  let uppercaseCriteriaArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  let numericCriteriaArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  let specialcharacterCriteriaArr = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '^', '_', '`', '{', '|', '}', '~', ']'];
  let finalPasswordArray = []; //This will be the arry to hold characters from all selected arrays

  // lowercaseChar() asks the user if they would like to include lower case letters in the password. This will alert the user if an incorrect response is given and ask for yes or no.
  function lowercaseChar() {
    let includeLowercase = window.prompt("Would you like to include lower case letters in your password?");
    includeLowercase = includeLowercase.toLowerCase();
    if (includeLowercase === "yes" || includeLowercase === "y") {
      finalPasswordArray.push(...lowercaseCriteriaArr);
    } else if (includeLowercase === "no" || includeLowercase === "n") {
      alert("The password will not include lower case letters.");
    } else {
      alert("You must enter yes or no.");
      lowercaseChar();
    }
  }
  lowercaseChar();

  // uppercaseChar() asks the user if they would like to include upper case letters in the password. This will alert the user if an incorrect response is given and ask for yes or no.
  function uppercaseChar() {
    let includeUppercase = window.prompt("Would you like to include upper case letters in your password?");
    includeUppercase = includeUppercase.toLowerCase();
    if (includeUppercase === "yes" || includeUppercase === "y") {
      finalPasswordArray.push(...uppercaseCriteriaArr);
    } else if (includeUppercase === "no" || includeUppercase === "n") {
      alert("The password will not include upper case letters.");
    } else {
      alert("You must enter yes or no.");
      uppercaseChar();
    }
  }
  uppercaseChar();

  // numericChar() asks the user if they would like to include numbers in the password. This will alert the user if an incorrect response is given and ask for yes or no.
  function numericChar() {
    let includeNumeric = window.prompt("Would you like to include numbers in your password?");
    includeNumeric = includeNumeric.toLowerCase();
    if (includeNumeric === "yes" || includeNumeric === "y") {
      finalPasswordArray.push(...numericCriteriaArr);
    } else if (includeNumeric === "no" || includeNumeric === "n") {
      alert("The password will not include numbers.");
    } else {
      alert("You must enter yes or no.");
      numericChar();
    }
  }
  numericChar();

  // specialChar() asks the user if they would like to include special characters in the password. This will alert the user if an incorrect response is given and ask for yes or no.
  function specialChar() {
    let includeSpecial = window.prompt("Would you like to include special characters in your password?");
    includeSpecial = includeSpecial.toLowerCase();
    if (includeSpecial === "yes" || includeSpecial === "y") {
      finalPasswordArray.push(...specialcharacterCriteriaArr);
    } else if (includeSpecial === "no" || includeSpecial === "n") {
      alert("The password will not include special characters.");
    } else if (includeSpecial !== "yes" || includeSpecial !== "no") {
      alert("You must enter yes or no.");
      specialChar();
    }
  }
  specialChar();

  // checkCriteria will provide an alert if the user says no to all criteria. It will then run through the criteria again until the user selects at least one criteria type.
  function checkCriteria() {
    if (finalPasswordArray.length === 0) {
      alert("You need to include at least one of the criteria.");
      lowercaseChar();
      uppercaseChar();
      numericChar();
      specialChar();
      checkCriteria();
    }
  }
  checkCriteria();

  // This will take the passwordLength and loop through assigning a random character from the array that holds all the selected criteria type characters
  let printPassword = "";
  for (var i = 0; i < passwordLength; i++) {
    printPassword += finalPasswordArray[Math.floor(Math.random() * finalPasswordArray.length)];
  }
  
  return printPassword;
}

// Event listener to generate button
generateBtn.addEventListener("click", writePassword);