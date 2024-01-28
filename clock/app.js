const time = document.querySelectorAll(".container .t");
const newTime = document.querySelector(".container .nn");
const format12hr = document.querySelector(".btns .hr12");
const format24hr = document.querySelector(".btns .hr24");

let is12hr = true;
function beforeClick(element) {
    element.style.color = "white";
    element.style.backgroundColor = 'blue';
    element.style.transition = '1s';
}
function afterClick(element) {
    element.style.backgroundColor = 'white';
    element.style.color = "black";
    element.style.transition = '1s';

}

if (is12hr) {
    beforeClick(format12hr);
    afterClick(format24hr);
}

format12hr.addEventListener("click", () => {
    is12hr = true;
    beforeClick(format12hr);
    afterClick(format24hr);


})
format24hr.addEventListener("click", () => {
    beforeClick(format24hr);
    afterClick(format12hr);
    is12hr = false;
})


setInterval(() => {
    const date = new Date();
    let hr = date.getHours();
    if (is12hr) {
        if (hr > 12)
            hr = hr - 12;
    }

    time[0].textContent = hr;
    time[1].textContent = date.getMinutes();
    time[2].textContent = date.getSeconds()

    if (date.getHours() >= 13) {
        time[3].textContent = "PM";
    }
    else {
        time[3].textContent = "AM";

    }

}, 1000);

