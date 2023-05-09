let nameArray = ["mike", "Han", "trist", "king", "sony", "susan"];
let isSusan = false;
let isMike = false;
let isHan = false;

for(let i = 0; i <nameArray.length; i++){
    if(nameArray[i] === "susan"){
        isSusan = true;
    }

    if(nameArray[i] === "mike"){
        isMike = true;
    }

    if(nameArray[i] === "han"){
        isHan = true;
    }
}

console.log("Is susan on the list? Answer: " + isSusan);
console.log("Is Mike on the list? Answer: " + isMike);
console.log("Is Han on the list? Answer: " + isHan);