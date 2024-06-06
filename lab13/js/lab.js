/*
   lab.js - This simple JavaScript/jQuery script makes a sequnce of numbers 1-200 and labels them acordingly

   Requirements: jQuery must be loaded for this script to work.

   Author: Jesus Barrios
   Date: 5-27-2024
*/

// for (var i=0; i <=200; i++) {
    
//     var longString = ""
    
    // if(i%3==0 && i%5==0 && i%7==0){
    //     console.log("FizzBuzzBoom")
    // } else if (i%7==0 && i%5==0){
    //     console.log("BuzzBoom");
    // } else if (i%5==0 && i%3==0) {
    //     console.log("FizzBuzz");
//     } else if (i%3==0) {
//         console.log("Fizz");
//     } else if (i%5==0) {
//         console.log("Buzz");
//     } else if (i%7==0) {
//         console.log("Boom");
//     } else { 
//         console.log(i);
//     }
// }



// Author: Jesus Barrios
// Date: 5-27-2024

for (var i = 1; i <= 131; i++) {
    var outputStr = ""; // Start with an empty string

    if (i % 3 == 0) {
        outputStr += "Fizz";
    }
    if (i % 5 == 0) {
        outputStr += "Buzz";
    }
    if (i % 7 == 0) {
        outputStr += "Boom";
    }

    // If outputStr is still empty, assign the number to it
    if (outputStr === "") {
        outputStr = i;
    }

    // Append the resulting string to the output div
    $("#output").append("<div>" + outputStr + "</div>");
}

