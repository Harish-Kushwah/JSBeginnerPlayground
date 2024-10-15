//proto , prototye
function createUser(firstName , lastName , email , age)
{
    const user = Object.create(createUser.prototype);
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age  = age;
    return user;
}
createUser.prototype.about =  function(){
    console.log(`FirstName ${this.firstName}  LastName : ${this.lastName}`);
    console.log(`Email ${this.email}  Age : ${this.age}`);

}
createUser.prototype.sing =  function(){
  console.log("hell this is sing function");

}

const newUser = createUser("harish" , "Kushwah" , "harish@gmail.com" , 28);
newUser.about();
newUser.sing();
const newUser1 = createUser("Pratik" , "Mahale" , "Partik@gmail.com" , 28);
newUser1.about();