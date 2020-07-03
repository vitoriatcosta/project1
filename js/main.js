function buttonClicked() {
    console.log ("Button clicked.");
    btn.removeEventListener("click", buttonClicked);
    document.getElementById ("text").innerHTML = "Don't do it."
}
var btn = document.getElementById("go-button");

//object.method("event", function)
btn.addEventListener ("click", buttonClicked);
//roda só uma vez