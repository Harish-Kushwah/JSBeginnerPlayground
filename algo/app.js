const numbers = document.querySelector(".num1");
const btn = document.querySelector(".btn");
const headInput = document.querySelector(".head");
const seekInput = document.querySelector(".seek");
const selectedAlgorithm = document.getElementById("algo");
const headDirection = document.getElementById("direction");
const disk_size = document.getElementById("disk_size");

class DiskSchedulingAlgorithm 
{
    FCFS(arr, head) {
        let seek_count = 0;
        let distance, cur_track;
        for (var i = 0; i < arr.length; i++) {
            cur_track = arr[i];
    
            // Calculate absolute distance
            distance = Math.abs(cur_track - head);
    
            // Increase the total count
            seek_count += distance;
    
            // Accessed track is now new head
            head = cur_track;
    
            seekInput.innerHTML = "<h4>Total Seek Count : " + seek_count + "</h4>"
        }
        return arr;
    }

    SCAN(arr,head , direction , disk_size){
        let seek_count = 0;
        let distance, cur_track;
        let left = [], right = [];
        let seek_sequence = [];
        let size = arr.length;
       // let disk_size = 200;
        // appending end values
        // which has to be visited
        // before reversing the direction
        if (direction == "LEFT")
            left.push(0);
        else if (direction == "RIGHT")
            right.push(disk_size - 1);
 
        for (let i = 0; i < size; i++)
        {
            if (arr[i] < head)
                left.push(arr[i]);
            if (arr[i] > head)
                right.push(arr[i]);
        }
 
        // sorting left and right vectors
        left.sort(function(a, b){return a - b});
        right.sort(function(a, b){return a - b});
 
        // run the while loop two times.
        // one by one scanning right
        // and left of the head
        let run = 2;
        while (run-- >0)
        {
            if (direction == "LEFT")
            {
                for (let i = left.length - 1; i >= 0; i--)
                {
                    cur_track = left[i];
 
                    // appending current track to seek sequence
                    seek_sequence.push(cur_track);
 
                    // calculate absolute distance
                    distance = Math.abs(cur_track - head);
 
                    // increase the total count
                    seek_count += distance;
 
                    // accessed track is now the new head
                    head = cur_track;
                }
                direction = "RIGHT";
            }
            else if (direction == "RIGHT")
            {
                for (let i = 0; i < right.length; i++)
                {
                    cur_track = right[i];
 
                    // appending current track to seek sequence
                    seek_sequence.push(cur_track);
 
                    // calculate absolute distance
                    distance = Math.abs(cur_track - head);
 
                    // increase the total count
                    seek_count += distance;
 
                    // accessed track is now new head
                    head = cur_track;
                }
                direction = "LEFT";
            }
        }

        seekInput.innerHTML = "<h4>Total Seek Count : " + seek_count + "</h4>"

        left.reverse()
        const data = [...left ,  ...right];
        console.log(data);
        return data;

    }
}

let algo = new DiskSchedulingAlgorithm();

selectedAlgorithm.addEventListener("change" , (event)=>{

        if(selectedAlgorithm.value == "SCAN"){
            headDirection.style.display = "block";
            console.log(headDirection.value);
        }
        else{
            headDirection.style.display = "none";

        }

})
btn.addEventListener("click", (event) => {
 
    const myData = [];
    let data = numbers.value.split(",");
    let head = Number(headInput.value);

    let algorithm_name = selectedAlgorithm.value;
    if(algorithm_name == "FCFS"){
      data = algo.FCFS(data, head);
    }
    else if(algorithm_name == "SCAN"){
        let diskSize = Number(disk_size.value); 
        data = algo.SCAN(data,head , headDirection.value , diskSize);
    }




    for (let i = 0; i < data.length; i++) {
        myData.push({ x: i, y: Number(data[i]), indexLabel: '' + data[i] });
    }

    draw(myData , algorithm_name);
});

/**
 * This function is used to display the graphs
 * @param {*} data 
 * @param {*} algorithm_name 
 */
const draw = function (data , algorithm_name) {
    CanvasJS.addColorSet("colors",
    [
    "#DC143C"              
    ]);
const chart = new CanvasJS.Chart("chartContainer",
{
    colorSet: "colors",
    title: {
        text: algorithm_name,
        lineThickness: 0.5,
        fontColor:"navy",
        fontSize:14,
        fontStyle:"normal",
        margin:4,

    },
    axisY2: {
        title: "Secondary X Axis",
        maximum:200

    },
    animationEnabled: true,
    animationDuration: 3000,
   
    
    axisY:
    {
        gridThickness: 0.5,
        tickLength: 0,
        // lineThickness: 0,
        // labelFormatter: function () {
        //     return " ";
        // },
    },
    data: [
        {
            showInLegend: false,
            // axisXType: "secondary",
            markerType: "circle",
            legendText: algorithm_name,
            type: "line",
            dataPoints: data
        },
       
        

    ]
});

chart.render();
}
