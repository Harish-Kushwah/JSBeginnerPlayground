let winningNumber = 18;

let userGuess = +prompt('Guess the number');


if(userGuess === winningNumber)
{
    console.log("Your guess is right");
}
else{
    if(userGuess < winningNumber){
        console.log("too low");
    }
    else{
        console.log("too high");
    }
}