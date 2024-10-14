//fill method
//value , start , end

const myArray = [2,4,5,6];

myArray.fill(-1,0,3);
console.log(myArray);

//splice method
// start,delete,insert

let deleted = myArray.splice(1,1);
console.log(deleted);

myArray.splice(2,0,"inserted item");
console.log(myArray);

//delete and insert 

const deletedItems = myArray.splice(1,2,"in");
console.log("deleted items" , deletedItems);
console.log(myArray);
