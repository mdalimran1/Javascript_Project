const start = document.querySelector("#start");
const stop = document.querySelector("#stop");
const reset = document.querySelector("#reset");
const getTime = document.querySelector("#getTime");
const clearTime = document.querySelector("#clearTime");

const div=document.querySelector('#timeShow');
const countHeader = document.querySelector("#countHeader");

let count = 0;
let stopTime;

start.addEventListener("click", () => {

  stopTime = setInterval(() => {
    count++;
    countHeader.innerHTML = count;
  }, 1000);
  

});


stop.addEventListener("click", () => {
  clearInterval(stopTime);
  
});


reset.addEventListener("click", () => {
  setTimeout(() => {
    countHeader.innerHTML = "0";
    count = 0;
    clearInterval(stopTime);
  }, 100);
});


getTime.addEventListener("click", () => {
let p =document.createElement('p');
p.innerHTML=`The Stop Time is ${count}`;
div.appendChild(p);
});


clearTime.addEventListener("click", () => {
  div.innerHTML='';
});
