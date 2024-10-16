
let numbers  = [1,2,3,4];

let num = new Array(1,2,3);
console.log(num);

// class

class CreateUser {
    constructor(firstName, lastName, email, age) {
        console.log("Constructor called ");
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.age = age;
    }
    about() {
        console.log(`FirstName ${this.firstName}  LastName : ${this.lastName}`);
        console.log(`Email ${this.email}  Age : ${this.age}`);

    }
    sing() {
        console.log("hell this is sing function");

    }

}

const newUser = new CreateUser("harish" , "Kushwah" , "harish@gmail.com" , 28);
newUser.about();
newUser.sing();
const newUser1 = new CreateUser("Pratik" , "Mahale" , "Partik@gmail.com" , 28);
newUser1.about();