//synchronous programming vs asynchronous programming

// synchronous programming single threaded

// setTimeout

// function hello() {
//     console.log("hello world");
// }


// console.log("script start");
// const id  = setTimeout(hello, 1000);

// console.log("setTimeout id :" , id);


// for(let i = 0 ;i<100; i++){
//     console.log("---");
// }

// console.log("clearing time out");
// clearTimeout(id);
// console.log("script end");

//setInterval()

console.log("script start");

const intervalId = setInterval(()=>{
  console.log(Math.random());
},1000);

console.log("script end");

clearInterval(intervalId);  //to stop the interval