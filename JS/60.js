const user1 = {
    firtName :"Harish",
    age :20,

    about : function(){
        console.log(this);
        console.log(this.firtName , this.age);
    }
}

// don't do this mistake
// const myFunc = user1.about;
// myFunc();

//bind the about function

const myFunc = user1.about.bind(user1);
myFunc();

//arrow function

const user2 = {
    firtName :"Harish",
    age :20,

    /*
      arrow function does not have this ,it takes the value of this from its surrounding
    */
    about : ()=>{
        console.log(this);
        console.log(this.firtName , this.age);
    },
    about1(){
        console.log(this);
        console.log(this.firtName , this.age);
    }
}

user2.about(user1);