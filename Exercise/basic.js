/*
  1. Write a JavaScript program to display the current day and time in the following format.  
    Sample Output : Today is : Tuesday.
    Current time is : 10 PM : 30 : 38
 */

// let date = new Date();
// console.log(date.getFullYear());
// console.log(date.getDate());
// console.log(date.getMonth());

/* 
5. Write a JavaScript program to rotate the string 'w3resource' 
 in the right direction. This is done by periodically removing one letter from the string end
 and attaching it to the front. 
*/

// let res = '';
// for(let char of "w3resource"){
//     res = char + res;
// }
// console.log(res);

/*
6. Write a JavaScript program to determine whether a 
   given year is a leap year in the Gregorian calendar. 
*/
// let year = 100

// const isLeapYear = (year)=>{
//     return (year%100===0)?(year%400==0):(year%4===0);
// }
// console.log(isLeapYear(100));

// let leapYears = []
// for(let i = 1; i<=100; i++){
//     if(isLeapYear(i)){
//         leapYears.push(i);
//     }
// }
// console.log(leapYears);


/*
 Q. Write a JavaScript program to find out if 1st January will be a Sunday between 2014 and 2050.
*/

// for(let year = 2014 ; year<=2200;year++){
//     let date = new Date(year,0,1);
//     if(date.getDay()===0){
//         console.log("year :" , year);
//     }
// }

/*
15. Write a JavaScript program to get the difference between a given number and 13, if the number is 
    broader than 13 return double the absolute difference
*/

// let num = 23;
// let diff  = Math.abs(num,13);
// if(diff>13){
//     console.log(diff*2);
// }