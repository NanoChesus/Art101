/* Define an empty object */


URL = "https://api.nasa.gov/planetary/apod?api_key=E3kgSmepyLBse1mJVwzy5AqBvY8kxmj22QCBNDGV"


const data = {
    "copyright": "(Team F.A.C.T.)",
    "date": "2024-06-03",
    "explanation": "Magnificent island universe NGC 2403 stands within the boundaries of the long-necked constellation Camelopardalis. Some 10 million light-years distant and about 50,000 light-years across, the spiral galaxy also seems to have more than its fair share of giant star forming HII regions, marked by the telltale reddish glow of atomic hydrogen gas. The giant HII regions are energized by clusters of hot, massive stars that explode as bright supernovae at the end of their short and furious lives. A member of the M81 group of galaxies, NGC 2403 closely resembles a galaxy in our own local galaxy group with an abundance of star forming regions, M33, the Triangulum Galaxy. Spiky in appearance, bright stars in this portrait of NGC 2403 are in the foreground, within our own Milky Way. Also in the foreground of the deep, wide-field, telescopic image are the Milky Way's dim and dusty interstellar clouds also known as galactic cirrus or integrated flux nebulae. But faint features that seem to extend from NGC 2403 itself are likely tidal stellar streams drawn out by gravitational interactions with neighboring galaxies.",
    "hdurl": "https://apod.nasa.gov/apod/image/2405/NGC2403-LRGB+Ha+Oiii-v25-f.jpg",
    "media_type": "image",
    "service_version": "v1",
    "title": "NGC 2403 in Camelopardalis",
    "url": "https://apod.nasa.gov/apod/image/2405/NGC2403-LRGB+Ha+Oiii-v25-f1024.jpg"
}


$("#activate").click(function() {
    
    
    $.ajax({
        

        url: URL,



        type: "GET",
    })

.done(function(data) {
    console.log(data);
    var printableDate = "<pre>" + JSON.stringify(data,null, 2) + "</pre>";


        $("#title").html(data.title);
        $("#output").append("<img src=" + data.url + ">");
        $("#output").append("<p>" + data.explanation + "<p>"); 

    })

});







