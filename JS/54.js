// iterable
// jispe hum for of loop laga sakein
// string , array are iterable

const firstName = "Harish";
for(let char of firstName){
    console.log(char);
}

const items = [1,2,3,4,5];
for(let i in items){
    console.log(i);
}

// array like object
// jinke pass length property hoti hai 
// aut jinko hum index se access kar sakte hai
// ex. string
