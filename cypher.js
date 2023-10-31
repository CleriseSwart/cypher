let index;
let asciiNum; //save the ascii decimal number of the letter the user input here
let userEnc; //user wants to encode a sentence
var cyphedValue; //store the new value of the moved letter here
let cyphedValueCoded; //

//grab the phrase the user wants to decode
userEnc = prompt("Please enter a phrase to encrypt: ").toUpperCase(); //make sure all letters are caps so we stay in the ASCII boundary for A->Z (65->90)
//display the resulting decode a sentence
alert(`Encrypted: ${encode15(userEnc)}`);
//this function encodes secret sentences for us

function encode15(userEnc) {
  cyphedValue = ""; //store the new value of the moved letter here
  //we use charCodeAt() to convert the string value to ASCII decimal number
  //the same for fromCharCode() we use this to convert the ASCII decimal number back to a string value
  for (index = 0; index < userEnc.length; index++) {
    asciiNum = userEnc[index].charCodeAt(0);
    //cyphedValueCoded = cyphedValue + 15;
    if (asciiNum >= 65 && asciiNum <= 75) {
      //from 65 (A) to  75(K) we need to add 15 spaces to ensure we stay within the A-Z (65 to 90) range
      cyphedValue += String.fromCharCode(asciiNum + 15); //use the ASCII number +15 to identify the correct letter
    } else if (asciiNum >= 76 && asciiNum <= 90) {
      //90-15 = 75. so from ASCII number 76 (L) to 90 (Z) we need to add 15 but also subtract 26 spaces to ensure we stay within the A-Z (65 to 90) range
      cyphedValue += String.fromCharCode(asciiNum + 15 - 26); //use the ASCII number +15-26 to identify the correct letter
    } else {
      cyphedValue += userEnc[index]; //allow special characters, spaces and punctuation to flow through as they originally were
    }
  }
  return cyphedValue; //return the final string value to print to the user
}


