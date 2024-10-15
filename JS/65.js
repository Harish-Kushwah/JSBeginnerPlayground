// new keyword
// 1.create empty object this = {}
// 2.return this
// 3.

// function createUser(firstName , age){
//     this.firstName = firstName;
//     this.age = age;
// }

// createUser.prototype.about = function(){
//     console.log(this.firstName , this.age);
// }


// const user1 = new createUser("Harish" , 19);
// console.log(user1.firstName);
// console.log(user1.age);

//=====================================

// constructor function
function CreateUser(firstName , lastName , email , age)
{
    // this work is done by the new keyword , 
    // const user = Object.create(createUser.prototype);

    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age  = age;

    //no need to return
    // return user;
}
CreateUser.prototype.about =  function(){
    console.log(`FirstName ${this.firstName}  LastName : ${this.lastName}`);
    console.log(`Email ${this.email}  Age : ${this.age}`);

}
CreateUser.prototype.sing =  function(){
  console.log("hell this is sing function");

}

const newUser = new CreateUser("harish" , "Kushwah" , "harish@gmail.com" , 28);
newUser.about();
newUser.sing();
const newUser1 = new CreateUser("Pratik" , "Mahale" , "Partik@gmail.com" , 28);
newUser1.about();