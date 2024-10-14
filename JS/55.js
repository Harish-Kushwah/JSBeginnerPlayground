// sets (it is iterable)
// store data
// sets also have its own methods
// no index-based access
// order is not guaranteed 
// unique items only (no duplication allowed)


const numbers = new Set([1,2,3,2,4,2]);
const strings = new Set("harish");
console.log(numbers);
console.log(strings);

const numberSet = new Set();

const arr1 = [1,2,3];
const arr2 = [1,2,3];

numberSet.add(arr1);
numberSet.add(arr1);
console.log(numberSet);

if(numberSet.has(arr1)){
    console.log(arr1 ,'is present');
}
else{
    console.log(arr1 ,'is not present');
}

for(let number of numbers){
    console.log(number);
}


const myArray = [1,2,3,4,5];
const uniqueElements = new Set(myArray);
let l = 0;
for(let i of uniqueElements){
    l++;
}
console.log("Length of set :"  ,l);