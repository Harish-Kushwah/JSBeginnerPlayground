// fetch

const URL = "https://jsonplaceholder.typicode.com/posts";

// const response = fetch(URL);
// console.log(response.then(response =>{
//     console.log(response)
// }));

// GET
fetch(URL)
    .then(response => {
        if (response.ok) {
            return response.json();
        }
        else {
            throw new Error("Something went wrong");
        }
    })
    .then(data => {
        console.log(data)
    })
    .catch(error => {
        console.log(error);
    })


//POST
fetch(URL , {
    method:'POST',
    body:JSON.stringify({
        title:'foo',
        body:'bar',
        userId :1,
    }),
    headers:{
        'Content-type':'application/json ; charset=UTF-8',
    }
})
.then(response =>{
    if(response.ok)
    {
        return response.json();
    }
    else{
        throw new Error("Something went wrong");
    }
})
.then (data =>{
    console.log(data);
})
.catch(error =>{
    console.log(error);
})