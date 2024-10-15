//proto , prototye

// const user1 = {
//     firstName :"Harish",
//     lastName  :"Kushwah",
//     email :"harishkushwah54321@gmail.com",
//     age :20,

//     about(){
//         console.log(`FirstName ${this.firstName}  LastName : ${this.lastName}`);
//         console.log(`Email ${this.email}  Age : ${this.age}`);

//     }
// }

const userMethods = {
    about: function(){
        console.log(`FirstName ${this.firstName}  LastName : ${this.lastName}`);
        console.log(`Email ${this.email}  Age : ${this.age}`);

    }
}
function createUser(firstName , lastName , email , age)
{
    const user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age  = age;
    user.about = userMethods.about;
    return user;
}

const newUser = createUser("harish" , "Kushwah" , "harish@gmail.com" , 28);
newUser.about();
const newUser1 = createUser("Pratik" , "Mahale" , "Partik@gmail.com" , 28);
newUser1.about();