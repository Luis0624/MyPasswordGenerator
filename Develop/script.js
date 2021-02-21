// Assignment Code Begins
//strings to set our password
var lowerCaseString = "abcdefghijklmnopqrstuvwxyz";
var upperCaseString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbersString = "0123456789";
var specialString = "!()?[]`~;:!@#$%^&*+=/\\\'\"";

//grabs the range and options for password
var includeRangeEl = document.querySelector("#characterRange");
var includeLowerEl = document.querySelector("#lowercaseCharacter");
var includeUpperEl = document.querySelector("#uppercaseCharacter");
var includeNumberEl = document.querySelector("#numbersCharacter");
var includeSpecialEl = document.querySelector("#specialCharacter");

// Grabs the generate selector
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
};
//Start password generation on button click


  
function generatePassword (){

    var combinePassword = [];
    var password = "";

    // variables to check if true/false of pass options and length value
    var passwordLength = includeRangeEl.value;
    var includeLower = includeLowerEl.checked;
    var includeUpper = includeUpperEl.checked;
    var includeNumbers = includeNumberEl.checked;
    var includeSpecial = includeSpecialEl.checked; 
    console.log( "range is " + passwordLength);
    // console.log("lower included " + includeLower);
    // console.log("Upper included " + includeUpper);
    // console.log("numbers included " + includeNumbers);
    // console.log( "special included " + includeSpecial);
    
    if (includeLower) {
        combinePassword = lowerCaseString
        // console.log ( "these are with " + combinePassword)
    }
    if (includeUpper) {
        combinePassword += upperCaseString
        // console.log( "added uppercase " + combinePassword )
    }
    if (includeNumbers) {
        combinePassword += numbersString
        // console.log("added numbers " + combinePassword)
    }
    if (includeSpecial) {
        combinePassword += specialString
        // console.log("added specials " + combinePassword)
    };
    if (!includeLower && !includeUpper && !includeNumbers && !includeSpecial){
        window.alert("You must choose at least 1 option to continue")
    } else if (includeLower === true || includeUpper === true || includeNumbers === true|| includeSpecial === true){
            //random string generator for password
            for(var i = 0; i < passwordLength; i++) { 
                password += combinePassword[Math.floor(Math.random() * combinePassword.length)];            
            };
        };
        //adds the password back to the array
        document.querySelector("#password").innerHTML = password;
    };  