let num=55;
if(num/10==0){
    console.log("good");
}
else{
    console.log("bad");
}

let name=prompt("Enter user name:");
let age=prompt("Enter user age:");
alert(`$(name) is $(age) years old.`);


let month="quarter4";
switch(month){
    case "quarter1":
        console.log("January");
        console.log("February");
        console.log("March");
        break;
    case "quarter2":
        console.log("April");
        console.log("May");
        console.log("June");
        break;
    case "quarter3":
        console.log("July");
        console.log("August");
        console.log("September");
        break;
    case "quarter4":
        console.log("Octomber");
        console.log("November");
        console.log("December");
        break;
}

let s="ant";
if((s.length>5) &&  (s[0]=="A" || s[0]=="a")){
    console.log("golden string");
}
else{
    console.log("not a golden string");
}

let a=5;
let b=9;
let c=10;
if(a>b){
    if(a>c){
        console.log("a is large");
    }
    else{
        console.log("c is large");
    }
}

else{
    if(b>c){
        console.log("b is large");
    }
    else{
        console.log("c is large");
    }
}
let num1=32;
let num2=4785;

if((num1%10)==(num2%10)){
    console.log("having same digit");
}
else{
    console.log("not having same digit");
}