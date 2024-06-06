

console.log()

function getNameAndDisplay() {
//prompts the user to put in there name 
var name = prompt("name now!: ");
//gets the tittle (h1) and changes the HTML to "hello + name"
$("#title").html('Hello, '+name);
}

 $("#my-button").click(getNameAndDisplay);

// $("my-button").click(function(){
//     console.log("click")
// });

