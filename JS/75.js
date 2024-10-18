const url1 = "https://jsonplaceholder.typicode.com/posts";
const url = "index.xml";

const xhr = new XMLHttpRequest();

xhr.open("GET" ,url);
xhr.onload = ()=>{
    if(xhr.status >=200 && xhr.status <300){
        // const data = JSON.parse(xhr.response);
        console.log(xhr.response);
        // const id = data[3].id;
        // console.log(id);

        const xml = xhr.response;
        // console.log(xml['Book']);
    }
    else{
        console.log("Something went wring");
    }
}
xhr.onerror = ()=>{
    console.log("network error");
}

xhr.send();