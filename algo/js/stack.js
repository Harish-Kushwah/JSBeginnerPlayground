const arrayContainer = document.getElementById('array-container');
const infoContainer = document.getElementById('info-container')
const numbers = document.querySelector(".num1");
const start = document.querySelector(".start-btn");
const selectedOperation = document.getElementById("algo");
// const pageShowing = document.getElementById("sorting-page");


function createStack(array) {
    arrayContainer.innerHTML = '';
    const parentBar = document.createElement('div');
    parentBar.className = "stack-bar"
    array.forEach((value, index) => {
        const bar = document.createElement('div');
        bar.className = 'block';

        bar.textContent = value;

        parentBar.appendChild(bar);

        arrayContainer.appendChild(parentBar);
    });
}
function addInfo(number) {
    infoContainer.innerHTML = '';

    let found_status="Push";
    const current_element = document.createElement("p");
    current_element.textContent = "Status:" + found_status;

  

    // const status = document.createElement("p");

   
    // status.textContent = "Status:" + found_status;

    // infoContainer.appendChild(status);

    const block_1 = document.createElement('div');
    block_1.className = "info-block";

    const block_2 = document.createElement('div');
    block_2.className = "info-block";


    const parentBar = document.createElement('div');
    parentBar.className = "info-parent-bar"

    const current_bar = document.createElement('div');
    current_bar.className = 'info-bar';
    current_bar.textContent = number;

    block_1.appendChild(current_element);
    block_1.appendChild(current_bar);
    parentBar.appendChild(block_1);
    infoContainer.appendChild(parentBar);

    // const target_bar = document.createElement('div');
    // target_bar.className = 'info-bar';
    // target_bar.textContent = target;
    // target_bar.style.backgroundColor = 'green';

    // block_2.appendChild(target_element);
    // block_2.appendChild(target_bar);
    // parentBar.appendChild(block_2);

    // infoContainer.appendChild(block_1);
    // infoContainer.appendChild(status);

}
async function push(stack , array, speed) {
    const n = array.length;

    for (let i = 0; i < n; i++) {

        stack.push(array[i]);
        createStack(stack);

        // Highlight the bars being compared
        arrayContainer.children[0].children[i].style.backgroundColor = 'red';
        addInfo(array[i]);


        // Delay for visualization (adjust as needed)
        await new Promise(resolve => setTimeout(resolve, speed));

        // if (!found)


        // if (array[i] === target) {
        //     arrayContainer.children[i].children[0].style.backgroundColor = 'green';
        //     found = true;
        // }
        // else {
        //     arrayContainer.children[i].children[0].style.backgroundColor = 'blue';
        // }

        // Swap if needed

    }
}


start.addEventListener("click", () => {

    // const target = document.getElementById("target");
    const MAX_SPEED = 1000;
    const speed = MAX_SPEED - Number(document.getElementById("speed").value);

    const array = [];
    const stack = [];

    if (selectedOperation.value.length == 0) {
        alert("Select Algorithm");
    }
    else {
        for (let x of numbers.value.split(",")) {
            array.push(Number(x));
        }

        if (selectedOperation.value == "push") {
            createStack(stack);
            push(stack , array, speed).then(() => {
                // Sorting is complete, do any cleanup or additional actions here
                console.log('Linear Sort completed!');
            });
        }
       

    }
}
);
