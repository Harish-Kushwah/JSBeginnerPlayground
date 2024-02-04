const arrayContainer = document.getElementById('array-container');
const numbers = document.querySelector(".num1");
const start = document.querySelector(".start-btn");
const selectedAlgorithm = document.getElementById("algo");
// const pageShowing = document.getElementById("sorting-page");


function createBars(array) {
    arrayContainer.innerHTML = '';
    const maxBarHeight = Math.min(800 / array.length, 200);
    array.forEach((value, index) => {
        const parentBar = document.createElement('div');
        parentBar.className = "parent-bar"

        const bar = document.createElement('div');
        bar.className = 'bar';

        // bar.style.height = `${value * 4}%`; // Adjust the height as needed

        const barHeight = value / Math.max(...array) * maxBarHeight;
        bar.style.height = `${barHeight}%`;

        let contHeight = arrayContainer.style.height;
        console.log(contHeight);

        bar.textContent = value;

        parentBar.appendChild(bar);

        arrayContainer.appendChild(parentBar);
    });
}

async function bubbleSort(array, order, speed) {
    const n = array.length;

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            // Highlight the bars being compared
            arrayContainer.children[j].children[0].style.backgroundColor = 'red';
            arrayContainer.children[j + 1].children[0].style.backgroundColor = 'red';

            // Delay for visualization (adjust as needed)
            await new Promise(resolve => setTimeout(resolve, speed));

            // Swap if needed
            if (order === "des") {
                if (array[j] < array[j + 1]) {
                    [array[j], array[j + 1]] = [array[j + 1], array[j]];
                    createBars(array);
                }
            }
            else {
                if (array[j] > array[j + 1]) {
                    [array[j], array[j + 1]] = [array[j + 1], array[j]];
                    createBars(array);
                }
            }

            // Reset the color
            arrayContainer.children[j].children[0].style.backgroundColor = 'blue';
            arrayContainer.children[j + 1].children[0].style.backgroundColor = 'blue';


        }
        // Mark the sorted bar
        arrayContainer.children[n - i - 1].children[0].style.backgroundColor = 'green';
    }
    for (let i = 0; i < n; i++) {
        arrayContainer.children[i].children[0].style.backgroundColor = 'green';
    }
}

// Selection Sort
async function selectionSort(array, order, speed) {
    const n = array.length;

    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;

        for (let j = i + 1; j < n; j++) {
            // Highlight the bars being compared
            arrayContainer.children[minIndex].children[0].style.backgroundColor = 'red';
            arrayContainer.children[j].children[0].style.backgroundColor = 'red';

            // Delay for visualization (adjust as needed)
            await new Promise(resolve => setTimeout(resolve, speed));

            // Update minIndex if a smaller element is found
            if ((order === "asc" && array[j] < array[minIndex]) || (order === "des" && array[j] > array[minIndex])) {
                minIndex = j;
            }

            // Reset the color
            arrayContainer.children[minIndex].children[0].style.backgroundColor = 'blue';
            arrayContainer.children[j].children[0].style.backgroundColor = 'blue';
        }

        // Swap the found minimum element with the first element
        [array[i], array[minIndex]] = [array[minIndex], array[i]];
        createBars(array);

        // Mark the sorted bar
        arrayContainer.children[i].children[0].style.backgroundColor = 'green';
    }

     // Mark all bars as sorted
     for (let i = 0; i < n; i++) {
        arrayContainer.children[i].children[0].style.backgroundColor = 'green';
    }
}

// Insertion Sort
async function insertionSort(array, order, speed) {
    const n = array.length;

    for (let i = 1; i < n; i++) {
        const key = array[i];
        let j = i - 1;

        // Highlight the key bar
        arrayContainer.children[i].children[0].style.backgroundColor = 'red';

        // Delay for visualization (adjust as needed)
        await new Promise(resolve => setTimeout(resolve, speed));

        while (j >= 0 && ((order === "asc" && array[j] > key) || (order === "des" && array[j] < key))) {
            // Highlight the bars being compared
            arrayContainer.children[j].children[0].style.backgroundColor = 'red';
            arrayContainer.children[j + 1].children[0].style.backgroundColor = 'red';

            // Delay for visualization (adjust as needed)
            await new Promise(resolve => setTimeout(resolve, speed));

            // Shift the elements
            array[j + 1] = array[j];
            createBars(array);

            // Reset the color
            arrayContainer.children[j].children[0].style.backgroundColor = 'blue';
            arrayContainer.children[j + 1].children[0].style.backgroundColor = 'blue';

            j--;
        }

        // Place the key element in its correct position
        array[j + 1] = key;
        createBars(array);

        // Reset the color of the key bar
        arrayContainer.children[i].children[0].style.backgroundColor = 'blue';
    }

    // Mark all bars as sorted
    for (let i = 0; i < n; i++) {
        arrayContainer.children[i].children[0].style.backgroundColor = 'green';
    }
}
/**
 * Merge Sort
 * Function is not working properly need to fix
 * @param {*} array 
 * @param {*} order 
 * @param {*} speed 
 */
/*
async function mergeSort(array, order, speed) {
    async function merge(left, right) {
        const result = [];
        let leftIndex = 0;
        let rightIndex = 0;
    
        while (leftIndex < left.length && rightIndex < right.length) {
            const leftBar = arrayContainer.children[leftIndex].children[0];
            const rightBar = arrayContainer.children[rightIndex + left.length].children[0];
    
            // Highlight the bars being compared
            leftBar.style.backgroundColor = 'red';
            rightBar.style.backgroundColor = 'red';
    
            // Delay for visualization (adjust as needed)
            await new Promise(resolve => setTimeout(resolve, speed));
    
            // Compare and merge
            if ((order === "asc" && left[leftIndex] < right[rightIndex]) || (order === "des" && left[leftIndex] > right[rightIndex])) {
                result.push(left[leftIndex]);
                leftIndex++;
            } else {
                result.push(right[rightIndex]);
                rightIndex++;
            }
    
            // Reset the color
            leftBar.style.backgroundColor = 'blue';
            rightBar.style.backgroundColor = 'blue';
        }
    
        // Merge the remaining elements
        return result.concat(left.slice(leftIndex), right.slice(rightIndex));
    }

    async function mergeSortHelper(arr) {
        const len = arr.length;

    if (len <= 1) {
        return arr;
    }

    const mid = Math.floor(len / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    const leftResult = await mergeSortHelper(left);
    const rightResult = await mergeSortHelper(right);

    const mergedArray = await merge(leftResult, rightResult);
    createBars(mergedArray);

        return mergedArray;
    }

    await mergeSortHelper(array);

    // Mark all bars as sorted
    for (let i = 0; i < array.length; i++) {
        arrayContainer.children[i].children[0].style.backgroundColor = 'green';
    }
}
*/

// Quick Sort
async function quickSort(array, order, speed) {
    async function partition(low, high) {
        const pivot = array[high];
        let i = low - 1;

        for (let j = low; j < high; j++) {
            // Highlight the bars being compared
            arrayContainer.children[j].children[0].style.backgroundColor = 'red';
            arrayContainer.children[high].children[0].style.backgroundColor = 'red';
            await new Promise(resolve => setTimeout(resolve, speed));

            // Swap if needed
            if ((order === "asc" && array[j] < pivot) || (order === "des" && array[j] > pivot)) {
                i++;
                [array[i], array[j]] = [array[j], array[i]];
                createBars(array);

                // Reset the color
                arrayContainer.children[j].children[0].style.backgroundColor = 'blue';
                arrayContainer.children[high].children[0].style.backgroundColor = 'blue';
            } else {
                // Reset the color
                arrayContainer.children[j].children[0].style.backgroundColor = 'blue';
            }
        }

        // Swap the pivot element with the element at (i + 1)
        [array[i + 1], array[high]] = [array[high], array[i + 1]];
        createBars(array);

        // Reset the color of the pivot element
        arrayContainer.children[i + 1].children[0].style.backgroundColor = 'green';

        return i + 1;
    }

    async function quickSortHelper(low, high) {
        if (low < high) {
            const partitionIndex = await partition(low, high);

            await quickSortHelper(low, partitionIndex - 1);
            await quickSortHelper(partitionIndex + 1, high);
        }
    }

    await quickSortHelper(0, array.length - 1);

    // Mark all bars as sorted
    for (let i = 0; i < array.length; i++) {
        arrayContainer.children[i].children[0].style.backgroundColor = 'green';
    }
}

// Radix Sort
async function radixSortAscending(array, speed) {
    // Function to find the maximum number in the array
    function getMax(arr) {
        let max = arr[0];
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] > max) {
                max = arr[i];
            }
        }
        return max;
    }

    // Using counting sort to sort the elements based on significant places
    async function countingSort(arr, exp) {
        const n = arr.length;
        const output = Array(n).fill(0);
        const count = Array(10).fill(0);

        for (let i = 0; i < n; i++) {
            const index = Math.floor(arr[i] / exp) % 10;
            count[index]++;
        }

        for (let i = 1; i < 10; i++) {
            count[i] += count[i - 1];
        }

        for (let i = n - 1; i >= 0; i--) {
            const index = Math.floor(arr[i] / exp) % 10;
            const sortedIndex = count[index] - 1;

            // Highlight the bar being processed
            arrayContainer.children[i].children[0].style.backgroundColor = 'red';

            // Delay for visualization (adjust as needed)
            await new Promise(resolve => setTimeout(resolve, speed));

            output[sortedIndex] = arr[i];
            count[index]--;

            createBars(output);

            // Reset the color
            arrayContainer.children[i].children[0].style.backgroundColor = 'blue';
        }

        for (let i = 0; i < n; i++) {
            arr[i] = output[i];
        }
    }

    const max = getMax(array);

    for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
        await countingSort(array, exp);
    }

    // Mark all bars as sorted
    for (let i = 0; i < array.length; i++) {
        arrayContainer.children[i].children[0].style.backgroundColor = 'green';
    }
}

// Radix Sort (Descending Order)
async function radixSortDescending(array, speed) {
    function getMax(arr) {
        let max = arr[0];
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] > max) {
                max = arr[i];
            }
        }
        return max;
    }

    async function countingSort(arr, exp) {
        const n = arr.length;
        const output = Array(n).fill(0);
        const count = Array(10).fill(0);

        for (let i = 0; i < n; i++) {
            const index = Math.floor(arr[i] / exp) % 10;
            count[index]++;
        }

        for (let i = 8; i >= 0; i--) { // Process digits in reverse order
            count[i] += count[i + 1];
        }

        for (let i = n - 1; i >= 0; i--) {
            const index = Math.floor(arr[i] / exp) % 10;
            const sortedIndex = count[index] - 1;

            // Highlight the bar being processed
            arrayContainer.children[i].children[0].style.backgroundColor = 'red';

            // Delay for visualization (adjust as needed)
            await new Promise(resolve => setTimeout(resolve, speed));

            output[sortedIndex] = arr[i];
            count[index]--;

            createBars(output);

            // Reset the color
            arrayContainer.children[i].children[0].style.backgroundColor = 'blue';
        }

        for (let i = 0; i < n; i++) {
            arr[i] = output[i];
        }
    }

    const max = getMax(array);

    for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
        await countingSort(array, exp);
    }

    // Mark all bars as sorted
    for (let i = 0; i < array.length; i++) {
        arrayContainer.children[i].children[0].style.backgroundColor = 'green';
    }
}


start.addEventListener("click", () => {

    const order = document.getElementById("order");
    const MAX_SPEED = 400;
    const speed = MAX_SPEED - Number(document.getElementById("speed").value);

    const array = [];

    if(selectedAlgorithm.value.length==0){
        alert("Select Algorithm");
    }
    else{
    for (let x of numbers.value.split(",")) {
        array.push(Number(x));
    }
    createBars(array);

    

    if (selectedAlgorithm.value == "bubble") {
        bubbleSort(array, order.value, speed).then(() => {
            // Sorting is complete, do any cleanup or additional actions here
            console.log('Bubble Sort completed!');
        });
    }
    else if (selectedAlgorithm.value == "insertion") {
        insertionSort(array, order.value, speed);
    }
    else if (selectedAlgorithm.value == "selection") {
        selectionSort(array, order.value, speed);
    }
    else if (selectedAlgorithm.value == "merge") {
        // mergeSort(array, order.value, speed);
    }
    else if (selectedAlgorithm.value == "quick") {
        quickSort(array, order.value, speed);
    }
    else if(selectedAlgorithm.value == "radix"){
        if(order.value == "asc"){
        radixSortAscending(array,speed);
        }
        else{
            radixSortDescending(array , speed);
        }
    }
    }
}
);
