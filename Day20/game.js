const favMovie="Siddhat";
let guess=prompt("guess my favourite movie:");
while( (guess!=favMovie) && (guess!="quit")){
    guess=prompt("wrong guess!.. guess my favourite movie");
}

if(guess==favMovie){
    console.log("congrats");
}else{
    console.log("you quit");
}