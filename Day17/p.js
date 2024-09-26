let size="S"
if(size==="XL"){
    console.log("price is Rs.250");
}
else if(size==="L"){
    console.log("price is Rs.200");
}
else if(size==="M"){
    console.log("price si Rs.100");
}
else if(size==="S"){
    console.log("price is 50");
}

//nested 
let marks=80;

if(marks>=30){
    console.log("pass");
    if(marks>=80){
        console.log("Grade:O")
    }
    else{
        console.log("Grade:A");
    }
}
else {
    console.log("Fail");
}