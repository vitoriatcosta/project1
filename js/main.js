function buttonClicked() {
    console.log ("Button clicked.");
    btn.removeEventListener("click", buttonClicked);
    document.getElementById ("text").innerHTML = "Don't do it."
}
var btn = document.getElementById("go-button");

//object.method("event", function)
btn.addEventListener ("click", buttonClicked);
//roda só uma vez

//------------ARRAYS------------------------------------------------------------------------------------------
var hobbies = ["reading", "drawing", "painting", "listening to music"];

// console.log (hobbies.pop()); //retorna o último item de qualquer array

hobbies.push("archery"); //adiciona o novo item

hobbies.forEach(function(item, index){ //item = i e index = ie
    console.log ("I like", item, index);

})
