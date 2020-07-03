function buttonClicked() {
    console.log ("Button clicked.");
}
var btn = document.getElementById("go-button");

//object.method("event", function)
btn.addEventListener("click", buttonClicked);
