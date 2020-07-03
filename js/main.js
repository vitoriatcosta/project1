function buttonClicked() {
    console.log ("Button clicked.");
    btn.removeEventListener("click", buttonClicked);
}
var btn = document.getElementById("go-button");

//object.method("event", function)
btn.addEventListener ("click", buttonClicked);
