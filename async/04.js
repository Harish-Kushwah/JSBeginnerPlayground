// Promise

const bucket = ['coffee', 'chips', 'vegetable', 'salt']

// creating promises 
const firedRicePromise = new Promise((resolve, reject) => {
    if (bucket.includes("vegetable") && bucket.includes("coffee") && bucket.includes("salt")) {
        resolve("Fired Rice");
    }
    else {
        reject("Unable to fried rice");
    }
});

//consuming fired rice promise

// firedRicePromise.then(

//     // when promise resolved
//     (myFriedRice) => {
//         console.log(myFriedRice);
//     }, 

//     //when promise rejected
//     (error) => {
//         console.log(error);
// });
firedRicePromise.then(
    // when promise resolved
    (myFriedRice) => {
        console.log(myFriedRice);
    }, 
   
).catch(
     //when promise rejected
     (error) => {
        console.log(error);
     }
)