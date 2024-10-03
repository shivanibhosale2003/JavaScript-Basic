let f=["apple","banana","litchi","orange","mango"];

for(let i=0;i<f.length;i++){
    console.log(i,f[i]);
}

for(let i=f.length-1;i>=0;i--){
    console.log(i,f[i]);
}



let heroes=[["ironman","spiderman","thor"],["superman","wonder women","flash"]];
for(let i=0;i<heroes.length;i++){
    console.log(`list #${i}`);
    for(let j=0;j<heroes[i].length;j++){
        console.log(heroes[i][j]);
    }
}

let names=["shivani","yashvant","anita","sanika","balaji"];
for(name of names){
    console.log(name);
}