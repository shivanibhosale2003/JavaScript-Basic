let str="apple";
if((str[0]==='a') && (str.length>3)){
    console.log("good string");
}
else{
    console.log("string is not good");
}

let num=12;

if((num%3===0)|| (num+1==15)|| (num-1==11)){
    console.log("safe");
}
else{
    console.log("unsafe");
}


let day="5";
switch(day){
    case "1":
        console.log("Sunady");
        break;
    case "2":
        console.log("Monday");
        break;
    case "3":
        console.log("Tuesday");
        break;
    case "4":
        console.log("Thursday");
        break;
    case "5":
        console.log("Friday");
        break;
    case "6":
        console.log("Saturday");
        break;
    default:
        console.log("Not a day");
}

//
let firstName=prompt("Enter first name:");
let lastName=prompt("enter last name:");
console.log(firstName+lastName);