// index.js - to creat a website about my mode of transportation
// Author: Jesus Barrios
// Date: 4-28-2024

// Constants

myTransport = ["car", "walk","bus"];

myMainRide = {
  make: "honda",
  model: "civic",
  color: "grey",
  year: 2018,
  age: function() {
    return 2024 - this.year;
  }
}


document.writeln("my Transport: ", myTransport, "</br>");

document.writeln("my Main Ride: <pre>",
  JSON.stringify(myMainRide, null, '\t'), "</pre>");

