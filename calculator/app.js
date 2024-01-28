const gridContainer = document.querySelector(".container");
const textDisplay = document.querySelector(".text");
const specialButtons = ["AC" ,"C", "+/-","=","%"];
const stack = [];


function clearScreen() {
    while (stack.length != 0) {
        stack.pop();
    }
}

// 90   => -90
// +90  => -90
// -90  => +90
function toggleSign() {
    if (stack.length != 0) {
        if (stack[0] !== '+' && stack[0] !== '-') {
            stack.unshift("-")
        }
        else if (stack[0] === "+") {
            stack[0] = "-";
        }
        else {
            stack[0] = "+";
        }
    }
}
function getScreenText() {
    let content = "";
    for (let char of stack) {
        content += char;
    }
    return content;
}
function removeResentText() {
    stack.pop();
}
function getPercentage() {
    let ans = eval(getScreenText());
    clearScreen();
    ans = ans / 100 + " ";
    for (let num of ans) {
        stack.push(num);
    }
}

gridContainer.addEventListener("click", (event) => {

    const button = event.target;
    const classList = button.classList;

    if (classList.contains("gird-item")) {

        if (classList.contains("special")) {

            if (button.textContent === "AC") {
                textDisplay.textContent = "";
                clearScreen();
            }
            else if (button.textContent === "C") {
                removeResentText()
            }
            else if (button.textContent === "=") {

                let content = getScreenText();

                clearScreen();

                let ans = eval(content) + '';
                for (let num of ans) {
                    stack.push(num);
                }

            }
            else if (button.textContent === "+/-") {
                toggleSign();
            }

        }
        else if (button.textContent === "%") {
                // divide by 100
                getPercentage();            
        }
        if(!specialButtons.includes(button.textContent)){
            stack.push(button.textContent);
        }
    
        textDisplay.textContent = getScreenText();
    }

    console.log(stack);


})