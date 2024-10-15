const obj1 = {
    key1 :"value1",
    key2 :"value2"
}

const obj2 = Object.create(obj1);

obj2.key3 = "value3";

console.log(obj2.key1);
console.log(obj2.__proto__);


const userMethods = {
    about: function(){
        console.log(`FirstName ${this.firstName}  LastName : ${this.lastName}`);
        console.log(`Email ${this.email}  Age : ${this.age}`);

    },
    sing :function(){
        console.log("hello world");
    }
}
function createUser(firstName , lastName , email , age)
{
    const user = Object.create(userMethods);

    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age  = age;
    return user;
}

const newUser = createUser("harish" , "Kushwah" , "harish@gmail.com" , 28);
newUser.about();
newUser.sing();
const newUser1 = createUser("Pratik" , "Mahale" , "Partik@gmail.com" , 28);
newUser1.about();