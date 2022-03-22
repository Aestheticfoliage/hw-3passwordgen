// Assignment Code
var generateBtn = document.querySelector("#generate");

 //Character list
 var lowercase = "abcdefghijklmnopqrstuvwxyz";
 var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
 var symbols = "!@#$%^&*_-+=";
 var numbers = "0123456789";

 //Grabbing all the checkbox from HTML
 var checkbox,uppercase = document.getElementById("uppercase");
 var checkbox,lowercase = document.getElementById("lowercase");
 var checkbox,numbers = document.getElementById("numbers");
 var checkbox,symbols = document.getElementById("symbols");

 //var checkbox,uppercase = document.getElementById("checkbox(uppercase)");
// var checkbox,lowercase = document.getElementById("checkbox(lowercase)");
 //var checkbox,numbers = document.getElementById("checkbox(numbers)");
 //var checkbox,symbols = document.getElementById("checkbox(symbols)");


 // Interpreted as "Is it true that checkbox.checked == true"?
 var combinedChars = "";

function generatePassword() {
  //YOUR CODE GOES HERE
 
  //Grabbed the selected checkbox 

  if (checkbox(Uppercase).checked) {
    combinedChars += uppercase;
    console.log("useUppercase");
  } else if (checkbox(lowercase).checked) {
    console.log("uselowercase");
    combinedChars += lowercase;
  } else if (checkbox(symbols).checked) {
    console.log("usesymbols");
    combinedChars += symbols;
  } else if (checkbox(numbers).checked) {
    console.log("usenumbers");
    combinedChars += numbers;
  }
  console.log("All the characters ", combinedChars); 
}
  // Interpreted as "Is checkbox.checked.checked true?", which is
  // an error because the checkbox.checked property doesn't have
  // a checked property and so checkbox.checked.checked will return
  // undefined, which will be false when converted to a Boolean
  //if (checkbox.checked) {
  //  console.log("test");
  //}

  //grabbing value from input field for password length

  var length = parseInt(document.getElementByID("passwordLength").value);
  alert("Password length is " + length);

  //calling the function to generate the outcome
 // var finalPass = generateString(length);
 // return finalPass; 
}

function generateString(Passwordlength) {
  alert("Inside");

  let result = " ";
  const charactersLength = combinedChars.length;

  //start with zero loop until the password length entered by the user
  for (var i = 0; i < Passwordlength; i++) {
    // console.log(i);
    //generating random index and the random letter from the combined character list 
    result += combinedChars.charAt(
      Math.floor(Math.random() * charactersLength)
    );
  }

  //return the new password
  return result;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  //
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

  //calling the function to generate the outcome
  var finalPass = generateString(length);
  return finalPass; 


