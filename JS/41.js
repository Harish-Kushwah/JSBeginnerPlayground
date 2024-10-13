// block scope vs function scope


// let and const are block scope
// var is function scope

// {
//     let firstName = "harish";
//     console.log(firstName);
// }

//  console.log(firstName); //can not access firstName error

// {
//     let firstName = "Rakesh";
//     console.log(firstName);
// }
// {
//     const firstName = "harish";
//     console.log(firstName);
// }
// {
//     const firstName = "Rakesh";
//     console.log(firstName);
// }
//  console.log(firstName); //can not access firstName error




{
    var firstName = "harish";
    console.log(firstName);
}
{
    //we can access the above var variable in this block    
    console.log(firstName);
}



console.log(firstName); 