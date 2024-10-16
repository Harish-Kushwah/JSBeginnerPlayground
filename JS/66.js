function CreateUser(firstName , lastName , email , age)
{
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age  = age;
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