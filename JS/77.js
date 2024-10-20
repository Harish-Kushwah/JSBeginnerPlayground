const URL = "https://jsonplaceholder.typicode.com/posts";

// fetch(URL)
// .then(reponse => reponse.json())
// .then(data =>{
//     console.log(data);
// })

async function getPosts()
{
    const response = await fetch(URL);
    const data = await response.json();
    return data;
}

getPosts()
.then(myData => {
    console.log(myData);
})
