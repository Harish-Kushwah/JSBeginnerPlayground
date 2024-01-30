const numbers = document.querySelector(".num1");
const btn = document.querySelector(".btn");
const headInput = document.querySelector(".head");

console.log(numbers);
const seekInput = document.querySelector(".seek")

function FCFS(arr, head) {
    var seek_count = 0;
    var distance, cur_track;
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
}

// var arr = [176, 79, 34, 60,92, 11, 41, 114, 45, 67, 23, 90, 89];
// var head = 50;





// data = arr;
btn.addEventListener("click", (event) => {
 
    const myData = [];
    let data = numbers.value.split(",");
    let head = Number(headInput.value);
    console.log(head);
    FCFS(data, head);
    for (let i = 0; i < data.length; i++) {
        myData.push({ x: i, y: Number(data[i]), indexLabel: '' + data[i] });
    }

    draw(myData);

});


const draw = function (data) {
    CanvasJS.addColorSet("colors",
    [
    "#901245"                
    ]);
const chart = new CanvasJS.Chart("chartContainer",
{
    colorSet: "colors",
    title: {
        text: "FCFS",
        lineThickness: 0.5,
        fontColor:"blue",
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
            showInLegend: true,
            // axisXType: "secondary",
            markerType: "circle",
            legendText: "FCFS",
            type: "line",
            dataPoints: data
        },
       
        

    ]
});

chart.render();
}
