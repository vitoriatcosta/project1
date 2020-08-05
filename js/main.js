var btn = document.getElementById("go-button");

function buttonClicked() {
    console.log ("Button clicked.");
    // btn.removeEventListener("click", buttonClicked);
    // document.getElementById ("text").innerHTML = "Don't do it." //muda a legenda do botão após ser clicado
    var customText = document.getElementsByClassName ("my-input");
    var textArea = document.getElementsByClassName ("text-area");
    var results = document.getElementById("text");
    // exibe no console
    results.innerHTML = "Olá, " + customText[0].value + "<br />";

    results.innerHTML += "Sua mensagem é: " + textArea[0].value;
}

function saySomething(phrase) {
    // phrase = var
    console.log("You said " + phrase);
}

function getPhraseLength(phrase) {
    var l = phrase.lenght;
    //var dentro da funçao só existe dentro da funçao
    return l;
}

getPhraseLength("This is a longer sentence, as you can see");

var p = "this is the phrase for this variable";

saySomething(p);
//p vai para phrase por causa da função

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