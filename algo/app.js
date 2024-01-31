const numbers = document.querySelector(".num1");
const submitBtn = document.querySelector(".signup-btn");
const resetBtn = document.querySelector(".reset-btn");
const headInput = document.querySelector(".head");
const seekInput = document.querySelector(".seek");
const selectedAlgorithm = document.getElementById("algo");
const headDirection = document.getElementById("direction");
const disk_size = document.getElementById("disk_size");

const chartContainer = document.getElementById("chartContainer");

class DiskSchedulingAlgorithm {
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

    SCAN(arr, head, direction, disk_size) {
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

        for (let i = 0; i < size; i++) {
            if (arr[i] < head)
                left.push(arr[i]);
            if (arr[i] > head)
                right.push(arr[i]);
        }

        // sorting left and right vectors
        left.sort(function (a, b) { return a - b });
        right.sort(function (a, b) { return a - b });

        // run the while loop two times.
        // one by one scanning right
        // and left of the head
        let run = 2;
        while (run-- > 0) {
            if (direction == "LEFT") {
                for (let i = left.length - 1; i >= 0; i--) {
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
            else if (direction == "RIGHT") {
                for (let i = 0; i < right.length; i++) {
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
        const data = [...left, ...right];
        console.log(data);
        return data;

    }

    CSCAN(arr, head, direction, disk_size) {
        let seek_count = 0;
        let distance, cur_track;
        let left = [], right = [];
        let seek_sequence = [];
        let size = arr.length;
        // appending end values
        // which has to be visited
        // before reversing the direction
        left.push(0);
        right.push(disk_size - 1);

        // tracks on the left of the
        // head will be serviced when
        // once the head comes back
        // to the beginning (left end).
        for (let i = 0; i < size; i++) {
            if (arr[i] < head)
                left.push(arr[i]);
            if (arr[i] > head)
                right.push(arr[i]);
        }

        // sorting left and right vectors
        left.sort(function (a, b) { return a - b });
        right.sort(function (a, b) { return a - b });

        // first service the requests
        // on the right side of the
        // head.
        for (let i = 0; i < right.length; i++) {
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

        // once reached the right end
        // jump to the beginning.
        head = 0;

        // adding seek count for head returning from 199 to 0
        seek_count += (disk_size - 1);

        // Now service the requests again
        // which are left.
        for (let i = 0; i < left.length; i++) {
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

        seekInput.innerHTML = "<h4>Total Seek Count : " + seek_count + "</h4>" 
        const data = [ ...right,...left];
        console.log(data);
        return data;

    }

    LOOK(arr, head, direction , disk_size) 
    { 
        let seek_count = 0; 
        let distance, cur_track; 
  
        let left = []; 
        let right = []; 
        let seek_sequence = []; 
        let size = arr.length;
  
        // Appending values which are 
        // currently at left and right 
        // direction from the head. 
        for(let i = 0; i < size; i++) 
        { 
            if (arr[i] < head) 
                left.push(arr[i]); 
            if (arr[i] > head) 
                right.push(arr[i]); 
        } 
  
        // Sorting left and right vectors 
        // for servicing tracks in the 
        // correct sequence. 
        left.sort(function(a, b){return a - b}); 
        right.sort(function(a, b){return a - b}); 
  
        // Run the while loop two times. 
        // one by one scanning right 
        // and left side of the head 
        let run = 2; 
        while (run-- > 0) 
        { 
            if (direction == "LEFT") 
            { 
                for(let i = left.length - 1; i >= 0; i--) 
                { 
                    cur_track = left[i]; 
  
                    // Appending current track to 
                    // seek sequence 
                    seek_sequence.push(cur_track); 
  
                    // Calculate absolute distance 
                    distance = Math.abs(cur_track - head); 
  
                    // Increase the total count 
                    seek_count += distance; 
  
                    // Accessed track is now the new head 
                    head = cur_track; 
                } 
  
                // Reversing the direction 
                direction = "RIGHT"; 
            } 
            else if (direction == "RIGHT") 
            { 
                for(let i = 0; i < right.length; i++) 
                { 
                    cur_track = right[i]; 
  
                    // Appending current track to 
                    // seek sequence 
                    seek_sequence.push(cur_track); 
  
                    // Calculate absolute distance 
                    distance = Math.abs(cur_track - head); 
  
                    // Increase the total count 
                    seek_count += distance; 
  
                    // Accessed track is now new head 
                    head = cur_track; 
                } 
  
                // Reversing the direction 
                direction = "LEFT"; 
            } 
        } 

        seekInput.innerHTML = "<h4>Total Seek Count : " + seek_count + "</h4>";
      
        left.reverse();
        const data = [ ...right,...left];
        console.log(data);
        return data;
    }

    CLOOK(arr, head)
    {
        let seek_count = 0;
        let distance, cur_track;
 
        let left = [];
        let right = [];
        let seek_sequence = [];

        let size = arr.length;
 
        // Tracks on the left of the
        // head will be serviced when
        // once the head comes back
        // to the beginning (left end)
        for(let i = 0; i < size; i++)
        {
            if (arr[i] < head)
                left.push(arr[i]);
            if (arr[i] > head)
                right.push(arr[i]);
        }
 
        // Sorting left and right vectors
        left.sort(function(a, b){return a - b});
        right.sort(function(a, b){return a - b});
 
        // First service the requests
        // on the right side of the
        // head
        for(let i = 0; i < right.length; i++)
        {
            cur_track = right[i];
 
            // Appending current track
            // to seek sequence
            seek_sequence.push(cur_track);
 
            // Calculate absolute distance
            distance = Math.abs(cur_track - head);
 
            // Increase the total count
            seek_count += distance;
 
            // Accessed track is now new head
            head = cur_track;
        }
 
        // Once reached the right end
        // jump to the last track that
        // is needed to be serviced in
        // left direction
        seek_count += Math.abs(head - left[0]);
        head = left[0];
 
        // Now service the requests again
        // which are left
        for(let i = 0; i < left.length; i++)
        {
            cur_track = left[i];
 
            // Appending current track to
            // seek sequence
            seek_sequence.push(cur_track);
 
            // Calculate absolute distance
            distance = Math.abs(cur_track - head);
 
            // Increase the total count
            seek_count += distance;
 
            // Accessed track is now the new head
            head = cur_track;
        }

        seekInput.innerHTML = "<h4>Total Seek Count : " + seek_count + "</h4>" 
        const data = [ ...right,...left];
        console.log(data);
        return data;
 
    }

    //shortest seek time first
    SSTF(arr , head)
    {

         // Count total number of seek operation   
         let seek_count = 0;
         let size = arr.length;


        function calculatedifference(request, head, diff, n) {
            for (let i = 0; i < n; i++) {
                diff[i][0] = Math.abs(head - request[i]);
            }
        }
         
        // Find unaccessed track which is 
        // at minimum distance from head 
        function findMIN(diff, n) {
            let index = -1;
            let minimum = 1e9;
         
            for (let i = 0; i < n; i++) {
                if (!diff[i][1] && minimum > diff[i][0]) {
                    minimum = diff[i][0];
                    index = i;
                }
            }
            return index;
        }
         
        function shortestSeekTimeFirst(request, head, n) {
            if (n == 0) {
                return;
            }
         
            // Create array of objects of class node    
            let diff = new Array(n);
            for (let i = 0; i < n; i++) {
                diff[i] = new Array(2);
            }
         
           
         
            // Stores sequence in which disk access is done 
            let seeksequence = new Array(n + 1);
            seeksequence[0] = head;
         
            for (let i = 0; i < n; i++) {
                calculatedifference(request, head, diff, n);
                let index = findMIN(diff, n);
                diff[index][1] = 1;
         
                // Increase the total count 
                seek_count += diff[index][0];
         
                // Accessed track is now new head 
                head = request[index];
                seeksequence[i + 1] = head;
            }
            return seeksequence;
        }

        let data =  shortestSeekTimeFirst(arr, head , size);
        seekInput.innerHTML = "<h4>Total Seek Count : " + seek_count + "</h4>" ;
        return data;

    }

    getDataForAlgorithm(algorithm_name, data , head , direction , diskSize){

        
        if (algorithm_name == "FCFS") {
            return this.FCFS(data, head);
        }
        else if (algorithm_name == "SCAN") {

            return this.SCAN(data, head, direction, diskSize);
        }
        else if (algorithm_name == "CSCAN") {
            return this.CSCAN(data, head, direction, diskSize);
        }
        else if(algorithm_name == "LOOK"){
            return this.LOOK(data , head,direction , diskSize);
        }
        else if(algorithm_name == "CLOOK"){
            return this.CLOOK(data , head);
        }
        else if(algorithm_name == "SSTF"){
            return this.SSTF(data,head);
        }
        return data

    }

}

let algo = new DiskSchedulingAlgorithm();

selectedAlgorithm.addEventListener("change", (event) => {

    if (selectedAlgorithm.value == "SCAN" ||selectedAlgorithm.value == "LOOK" ) {
        headDirection.style.display = "block";
        console.log(headDirection.value);
    }
    else {
        headDirection.style.display = "none";

    }

});
resetBtn.addEventListener("click", (e) => {
    headDirection.style.display = "none";
    seekInput.style.display = "none";
    // chartContainer.style.display ="none";
    draw([], "");
});
submitBtn.addEventListener("click", (event) => {

    const myData = [];
    let data = numbers.value.split(",");
    let head = Number(headInput.value);
    let algorithm_name = selectedAlgorithm.value;
    let diskSize = Number(disk_size.value);

    if (algorithm_name.length != 0) {

        if(algorithm_name == "ALL"){

           
            const mySet= [ ]

            let allAlgorithm = ['FCFS','SCAN','CSCAN','LOOK','CLOOK','SSTF'];
            let colors = {'FCFS':'yellow',
                            'SCAN':'red',
                            'CSCAN':'blue',
                            'LOOK':'green', 
                            'CLOOK':'pink', 
                            'SSTF': 'black'};

            for(let name of allAlgorithm)
            {
                let tempMyObj = []
                // tempMyObj.legendText = name;
                // tempMyObj.lineColor = colors[name];
           //     console.log(colors[name]);

                const record = algo.getDataForAlgorithm(name , data , head , headDirection.value , diskSize);
              
                for (let i = 0; i < record.length; i++) {
                    tempMyObj.push({ x: i, y: Number(record[i]), indexLabel: '' + record[i] });
                }

                let myObj = {
                    showInLegend: true,
                    markerType: "circle",
                    markerSize:4,
                    markerColor:colors[name],               
                    type: "line",
                    legendText :name,
                    lineColor:colors[name],
                    dataPoints:tempMyObj,
                    
                    
                }

                mySet.push(myObj);

            }
        
            seekInput.style.display = "none";
            drawMultiple(mySet);
        }
        else{
            seekInput.style.display = "block";
        data = algo.getDataForAlgorithm(algorithm_name , data , head , headDirection.value , diskSize);
        for (let i = 0; i < data.length; i++) {
            myData.push({ x: i, y: Number(data[i]), indexLabel: '' + data[i] });
        }
        draw(myData, algorithm_name);
      }
    }
    else {
        alert("Select Algorithm");
    }
});

/**
 * This function is used to display the graphs
 * @param {*} data 
 * @param {*} algorithm_name 
 */
const draw = function (data, algorithm_name) {
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
                fontColor: "navy",
                fontSize: 14,
                fontStyle: "normal",
                margin: 4,

            },
            axisY2: {
                title: "Secondary X Axis",
                maximum: 200

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
                    dataPoints: data,
                   
                },



            ]
        });

    chart.render();
}
const drawMultiple = function (dataSet) {
    CanvasJS.addColorSet("colors",
        [
            "#DC143C",
            "#DC103C",
            "#DA143C",
            "#BC113C",
            "#AC113C",
            "#D1233C",
        ]);
    const chart = new CanvasJS.Chart("chartContainer",
        {
            // colorSet: "colors",
            title: {
               text :"All Algorithms",
                lineThickness: 0.5,
                fontColor: "navy",
                fontSize: 14,
                fontStyle: "normal",
                margin: 4,

            },
            axisY2: {
                title: "Secondary X Axis",
                maximum: 200

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
            data: dataSet
        });

    console.log(dataSet);
    console.log(chart);
    chart.data = dataSet;


    chart.render();
}
