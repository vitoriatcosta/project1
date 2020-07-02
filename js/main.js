// comparar valores usa-se == : true == true > true; diferente !=; > e < e >= e <= também são usados
var PremiumUser = false; 

if(PremiumUser == true){
    console.log("Thanks for your subscription!");
}
else{
    console.log("If you wanna see more from us, subscribe!");
}

var age = 20;

if(age<1){
    console.log("you are a baby");
}
else if(age<3){
    console.log("you are a toddler!");
}
else if(age <= 10){
    console.log ("kid");
}
else if(age <= 19){
    console.log("teen");
}
else if (age <= 60){
    console.log("adult");
}
else {
    console.log("elderly")
} 