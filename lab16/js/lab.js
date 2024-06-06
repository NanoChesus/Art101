/*
   lab.js - This simple JavaScript/jQuery uses APIs to dilver some funny geekie comics to your front webpage

   Requirements: jQuery must be loaded for this script to work.

   Author: Jesus Barrios
   Date: 6-6-2024
*/

// URL = "https://xkcd.com/info.0.json"

const proxyUrl = "https://cors-anywhere.herokuapp.com/";
const apiUrl = "https://xkcd.com/info.0.json";
const url = proxyUrl + apiUrl;

$("#activate").click(function () {
    
$.ajax({
    
        url: URL,


        type: "GET",
        
    })
    .done(function(data) {
        console.log(data);

        var printableDate = "<pre>" + JSON.stringify(data, null, 2) + "</pre>";

            $("#title").html(data.title);
            $("#output").append("<img src=" + data.img + ">");
            $("#output").append("<p>" + data.alt + "<p>"); 

    })

});

