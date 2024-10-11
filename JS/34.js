// objects inside array
// very useful in real world application

const users = [
    {userId : 1 , firstName: 'Harish', gender:"Male"},
    {userId : 2 , firstName: 'Rakesh', gender:"Male"},
]

// console.log(users[0]);

// for (const user of users) {
//     console.log(user.userId);
// }

//nested destructuring 

const [user1 , user2 ] = users;

//get specific values of key
const [ {userId :myId , firstName : user1Name}  , {firstName}] = users;


console.log(user1Name);

console.log(myId);
console.log(firstName);