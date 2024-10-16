class Animal{
   
    constructor(name,age) {
        this.name = name;
        this.age = age;
    }

    showDetails(){
        console.log("Name : "  , this.name);
        console.log("Age :" , this.age);
    }
}
// inheriting the the animal class
class Dog extends Animal{
    constructor(name,age,speed){
        super(name,age);    //super keyword
        this.speed = speed;
    }
    bark(){
        console.log(`${this.name} is barking`);
    }
    
    showDetails(){
        super.showDetails();
        console.log("Speed :" , this.speed);
    }

    


}
const dog = new Dog("Tommy",30,20);
dog.bark();
dog.showDetails();