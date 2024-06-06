/*
   lab.js - This simple JavaScript/jQuery script givec an output based on the input using conditionals.

   Requirements: jQuery must be loaded for this script to work.

   Author: Jesus Barrios
   Date: 5/19/2024
*/
$("#button").click(sortingHat);


function sortingHat(){
    var text = document.getElementById('input');
    var count = text.value.length;
    
 
    if (count%4 === 0){
            $("#output").html('<div class="text"><p>' + "Gryffindor: The Hat considers your character. It senses your courage, your desire to protect others. “Ah, a Gryffindor!” it exclaims. You join the table where brave souls sit, their scarlet and gold banners fluttering above. You’ll share dormitories with fellow lion-hearted students, and together, you’ll face thrilling adventures and daring challenges. Remember, bravery isn’t the absence of fear; it’s acting despite it." + '</p></div>');
        }else if (count%4 === 1){
            $("#output").html('<div class="text"><p>' + "Slytherin: The Hat senses your ambition, your cunning. “Slytherin!” it declares. You descend into the dungeons, where green and silver banners hang. Slytherins are resourceful and determined. They know that power lies not only in spells but also in strategy. Forge alliances, pursue your goals, and remember that ambition needn’t be dark—it can lead to greatness." + '</p></div>');
        }else if (count%4 === 2){
            $("#output").html('<div class="text"><p>' + "Hufflepuff: The Hat pauses, studying your loyalty and kindness. “Hufflepuff!” it declares. You find yourself welcomed by friendly faces at the Hufflepuff table. Yellow and black streamers sway overhead. Here, hard work is celebrated, and inclusivity reigns. You’ll bond with your housemates over shared meals and late-night conversations. Loyalty isn’t just a word; it’s a way of life." + '</p></div>');
        } else {
            $("#output").html('<div class="text"><p>' + "Ravenclaw: The Hat detects your thirst for knowledge, your curiosity. “Ravenclaw!” it announces. You ascend the marble staircase to Ravenclaw Tower, where bronze and blue tapestries adorn the walls. The common room overlooks the vast Hogwarts library. Wit and wisdom thrive here. Engage in late-night debates, solve riddles, and explore the mysteries of magic. Creativity and intellect are your allies." + '</p></div>');
        }
     if (count%4 === 0){
    $(".minor-section").toggleClass("Gryffindor-minor-section");
}else if (count%4 === 1){
    $(".minor-section").toggleClass("Slytherin-minor-section");
}else if (count%4 === 2){
    $(".minor-section").toggleClass("Hufflepuff-minor-section");
} else {
    $(".minor-section").toggleClass("Ravenclaw-minor-section");
}

}

