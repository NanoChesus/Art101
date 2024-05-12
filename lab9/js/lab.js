/*
   lab.js - This simple JavaScript/jQuery script uses buttons to modify some elements on the page

   Requirements: jQuery must be loaded for this script to work.

   Author: Jesus Barrios
   Date: 9 may 2023
*/

// add button to challenge section

$("#Challenge").append("<button id='Challenge-button'>Make pretty :)</button>");
$("#Problems").append("<button id='Problems-button'>Can't see? </button>");
$("#Results").append("<button id='Results-button'>Make Special</button><button id='unResults-button'> say bye to OIP</button>");

// add a click listener to the challenge button
$("#Challenge-button").click(function(){
    // now add (or subtract) the "special" class to the section
    $(".special-minor-section").toggleClass("special");
});


$("#Problems-button").click(function(){
    
    $(".special-minor-section").toggleClass("bigger-special");
});


$("#Results-button").click(function(){
    
    $("#img-display").append("<img id='OIP' src='img/OIP.jpg'>");
});

$("#unResults-button").click(function(){
    $("#OIP").remove()
})