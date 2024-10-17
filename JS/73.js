// closure 

//function can return function
function outerFunction() {

    function innerFunction() {
        return 1;
    }
    return innerFunction;
}

const ans = outerFunction();
console.log(ans);

function myFunction(power) {
    return function (number) {
        return number ** power;
    }
}

const func = power => number => number ** power;

const cube = func(3);
console.log(cube(2));

function func1() {
    let call = 0;
    return () => {
        if (call < 1) {
            console.log("Hi , you called me !!");
            call++;
        }
        else {
            console.log("Mai already ek bar call ho chuka hoo.")
        }
    }
}

const myFunc = func1();
myFunc();
myFunc();

const myFunc2 = func1();
myFunc2();
myFunc2();