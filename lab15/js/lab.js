/* Define an empty object */


URL = "https://api.chucknorris.io/jokes/random?category=dev"





$("#activate").click(function() {
    
    
    $.ajax({
        

        url: URL,



        type: "GET",
    })

    .done(function(data) {
        console.log(data); // Log the data to check the returned object

        $("#joke-output").html(`
            <img src="${data.icon_url}" alt="Chuck Norris Icon" style="max-width: 100px;">
            <p>${data.value}</p>
        `);
    })

});







