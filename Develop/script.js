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
  passwordLength = parseInt(window.prompt("How long would you like your password to be? Please enter a number 8 - 128."));

  if (passwordLength > 7 && passwordLength < 129){
    alert ("The password will be " + passwordLength + " characters long.");
  } else if (passwordLength < 8 || passwordLength > 128){
    alert("The number must be between 8 and 128.");
    askPasswordLength();
  } else if (typeof passwordLength !== Number){
    alert ("Please enter a number.");
    askPasswordLength();
  }
}

function generatePassword () {
  askPasswordLength();
  let lowercaseCriteriaArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  let uppercaseCriteriaArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  let numericCriteriaArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  let specialcharacterCriteriaArr = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '^', '_', '`', '{', '|', '}', '~']; 
  // I do not know how to include: '\', ']',


  let finalPasswordArray = []; //This will be the arry to hold characters from all selected arrays
  let finalPassword = ""; // Variable to store the final password string

  function lowercaseChar(){
    let includeLowercase = window.prompt("Would you like to include lower case letters in your password?");
    includeLowercase = includeLowercase.toLowerCase();
    console.log(includeLowercase);
    if (includeLowercase === "yes" || includeLowercase === "y"){
      finalPasswordArray.push(...lowercaseCriteriaArr);
    } else if (includeLowercase === "no" || includeLowercase === "n"){
      alert("The password will not include lower case letters.");
    } else {
      alert("You must enter yes or no.");
      lowercaseChar();
    }
    console.log(finalPasswordArray);
  }
  lowercaseChar();
  
  function uppercaseChar(){
    let includeUppercase = window.prompt("Would you like to include upper case letters in your password?");
    includeUppercase = includeUppercase.toLowerCase();
    console.log(includeUppercase);
    if (includeUppercase === "yes" || includeUppercase === "y"){
      finalPasswordArray.push(...uppercaseCriteriaArr);
    } else if (includeUppercase === "no" || includeUppercase === "n") {
      alert("The password will not include upper case letters.");
    } else {
      alert("You must enter yes or no.");
      uppercaseChar();
    }
    console.log(finalPasswordArray);
  }
  uppercaseChar();

  function numericChar(){
    let includeNumeric = window.prompt("Would you like to include numbers in your password?");
    includeNumeric = includeNumeric.toLowerCase();
    console.log(includeNumeric);
    if (includeNumeric === "yes" || includeNumeric === "y"){
      finalPasswordArray.push(...numericCriteriaArr);
    } else if (includeNumeric === "no" || includeNumeric === "n") {
      alert("The password will not include numbers.");
    } else {
      alert("You must enter yes or no.");
      numericChar();
    }
    console.log(finalPasswordArray);
  }
  numericChar();

  function specialChar(){
    let includeSpecial = window.prompt("Would you like to include special characters in your password?");
    includeSpecial = includeSpecial.toLowerCase();
    console.log(includeSpecial);

    if (includeSpecial === "yes" || includeSpecial === "y"){
      finalPasswordArray.push(...specialcharacterCriteriaArr);
      console.log(finalPasswordArray);
    } else if (includeSpecial === "no" || includeSpecial === "n") {
      alert("The password will not include special characters.");
    } else if (includeSpecial !== "yes" || includeSpecial !== "no") {
      alert("You must enter yes or no.");
      specialChar();
    }
    console.log(finalPasswordArray);
}
  specialChar();

  // if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial){
  //   alert("You must say yes to one criteria");
  // }

  // BUG TO FIX - write a statemen that if they do not choose one criteria they will need to select one!!

  // This will take the passwordLength and loop through assigning a random character from the array that holds all the characters 
  let printPassword = "";
  for (var i = 0; i < passwordLength; i++) {
    printPassword += finalPasswordArray[Math.floor(Math.random() * finalPasswordArray.length)];
  }
  
  return printPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);