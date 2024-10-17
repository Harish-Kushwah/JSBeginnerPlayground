//  getter and setters

class Person{
    constructor(firstName , lastName , age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get fullName(){
        return this.firstName + ' ' + this.lastName;
    }

    set fullName(fullName){
        [this.firstName , this.lastName] = fullName.split(" ");
    }
}



const person  = new Person("Harish" , "Kushwah" , 18);

console.log(person.fullName);

person.fullName = "Pratik Mahale";

console.log(person.fullName);