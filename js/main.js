var btn = document.getElementById("go-button");

function buttonClicked() {
    console.log ("Button clicked.");
    // btn.removeEventListener("click", buttonClicked);
    // document.getElementById ("text").innerHTML = "Don't do it." //muda a legenda do botõ após ser clicado
    var customText = document.getElementsByClassName ("my-input");
    var results = document.getElementById("text");
    console.log(customText);
    results.innerHTML = "Olá, " + customText[0].value;

}

// //object.method("event", function)
btn.addEventListener ("click", buttonClicked);
// //roda só uma vez

// //------------ARRAYS------------------------------------------------------------------------------------------
// var hobbies = ["reading", "drawing", "painting", "listening to music"];

// // console.log (hobbies.pop()); //retorna o último item de qualquer array

// hobbies.push("archery"); //adiciona o novo item
// //hobbies.shift(); 
// console.log(hobbies.shift());

// hobbies.unshift("anything"); //replace the first item

// hobbies.forEach(function(item, index){ //item = i e index = ie
//     console.log ("I like", item, index);
// })

// if (hobbies.indexOf('drawing') > -1) {
//     console.log ("in the array");
// }
// else {
//     console.log ("not in array");
// }

// if (hobbies.indexOf('sports') === -1) {
//     console.log ("not found")
// }