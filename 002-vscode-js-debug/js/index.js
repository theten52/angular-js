// ./js/index.js
let getTimeBtn = document.getElementById("getTime");
getTimeBtn.onclick = function (e) {
    let time = document.getElementById("time");
    let now = new Date().toLocaleString();
    time.innerHTML = now;
}