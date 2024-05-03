// index.js - to creat a website about my mode of transportation
// Author: Jesus Barrios
// Date: 5-2-2024

// Constants


let userName = prompt("what is your name");

if (userName != null) {
    document.getElementById("demo").innerHTML =
    "hello" + userName + "! how are you doing on this fine day :-)";
    
}

function reverseSort(userName) {
    return userName.split('').reverse().join('');
}

document.writeln("enjoy your new name " + userName);