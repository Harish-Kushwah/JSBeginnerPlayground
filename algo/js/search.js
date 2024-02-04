const arrayContainer = document.getElementById('array-container');
const infoContainer = document.getElementById('info-container')
const numbers = document.querySelector(".num1");
const start = document.querySelector(".start-btn");
const selectedAlgorithm = document.getElementById("algo");
// const pageShowing = document.getElementById("sorting-page");


function createBars(array) {
    arrayContainer.innerHTML = '';
    array.forEach((value, index) => {
        const parentBar = document.createElement('div');
        parentBar.className = "parent-bar1"

        const bar = document.createElement('div');
        bar.className = 'bar1';

        bar.textContent = value;

        parentBar.appendChild(bar);

        arrayContainer.appendChild(parentBar);
    });
}
function addInfo(number, target) {
    infoContainer.innerHTML = '';
    const current_element = document.createElement("p");
    current_element.textContent = "Current Number";

    const target_element = document.createElement("p");
    target_element.textContent = "Target Number";

    const status = document.createElement("p");

    let found_status;
    if (target == number) {
        found_status = "Found";
    }
    else {
        found_status = "Not Found";
    }

    status.textContent = "Status:" + found_status;

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
    // infoContainer.appendChild(parentBar);

    const target_bar = document.createElement('div');
    target_bar.className = 'info-bar';
    target_bar.textContent = target;
    target_bar.style.backgroundColor = 'green';

    block_2.appendChild(target_element);
    block_2.appendChild(target_bar);
    parentBar.appendChild(block_2);

    infoContainer.appendChild(parentBar);
    infoContainer.appendChild(status);





}
async function linearSearch(array, target, speed) {
    const n = array.length;

    let found = false;
    for (let i = 0; i < n; i++) {
        // Highlight the bars being compared
        arrayContainer.children[i].children[0].style.backgroundColor = 'red';

        // Delay for visualization (adjust as needed)
        await new Promise(resolve => setTimeout(resolve, speed));

        if (!found)
            addInfo(array[i], target);


        if (array[i] === target) {
            arrayContainer.children[i].children[0].style.backgroundColor = 'green';
            found = true;
        }
        else {
            arrayContainer.children[i].children[0].style.backgroundColor = 'blue';
        }

        // Swap if needed

    }
}
async function binarySearch(array, target, speed) {
    const n = array.length;
    let left = 0;
    let right = n;

    let mid;
    let found = false;
    while (left <= right) {

        mid = Math.ceil((left + right) / 2);

        if (!found)
            addInfo(array[mid], target);

        arrayContainer.children[mid].children[0].style.backgroundColor = 'red';

        await new Promise(resolve => setTimeout(resolve, speed));

        if (array[mid] === target) {
            arrayContainer.children[mid].children[0].style.backgroundColor = 'green';
            found = true;
            break;
        }
        else if (target < array[mid]) {
            right = mid - 1;
        }
        else {
            left = mid + 1;
        }
        arrayContainer.children[mid].children[0].style.backgroundColor = 'blue';
    }
}

async function sentinelSearch(array, target, speed) {
    let n = array.length;

    let found = false;
    let last = array[n - 1];
    array[n - 1] = target;

    createBars(array);
    let i = 0;
    while (true) {
        arrayContainer.children[i].children[0].style.backgroundColor = 'red';
        
        await new Promise(resolve => setTimeout(resolve, speed));
        
        arrayContainer.children[i].children[0].style.backgroundColor = 'blue';
        addInfo(array[i], target);
        if (array[i] === target) {
            break;
        }
        i++;
    }

    array[n - 1] = last;
    createBars(array);

    if ((i < n - 1) || array[n - 1] === target) {
        arrayContainer.children[i].children[0].style.backgroundColor = 'green';
        found = true;
    }
    else {
        found = false;
    }
    if (!found)
        addInfo(array[i], target);

}

start.addEventListener("click", () => {

    const target = document.getElementById("target");
    const MAX_SPEED = 400;
    const speed = MAX_SPEED - Number(document.getElementById("speed").value);

    const array = [];

    if (selectedAlgorithm.value.length == 0) {
        alert("Select Algorithm");
    }
    else {
        for (let x of numbers.value.split(",")) {
            array.push(Number(x));
        }

        if (selectedAlgorithm.value == "linear") {
            createBars(array);
            linearSearch(array, Number(target.value), speed).then(() => {
                // Sorting is complete, do any cleanup or additional actions here
                console.log('Linear Sort completed!');
            });
        }
        else if (selectedAlgorithm.value == "binary") {

            array.sort((a, b) => a - b);
            createBars(array);
            binarySearch(array, Number(target.value), speed);
        }
        else if (selectedAlgorithm.value == "sentinel") {
            // createBars(array);
            sentinelSearch(array, Number(target.value), speed);
        }

    }
}
);
