//methods

// function inside object

function personInfo(){
    console.log("First name :" ,this.firstName);
    console.log("Age :" ,this.age);
}
const person = {
    firstName :"Harish",
    age :20,

    showDetails : function(){
        console.log("First name :" ,this.firstName);
        console.log("Age :" ,this.age);
    },

    about:personInfo,

   
}
const person1 = {
    firstName :"Rakesh",
    age :200,

    showDetails : function(){
        console.log("First name :" ,this.firstName);
        console.log("Age :" ,this.age);
    },

    about:personInfo,

   
}

person.about();
person1.about();


