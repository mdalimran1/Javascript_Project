const input = document.querySelector("#input");
const listContainer =document.querySelector("#list");
const button =document.querySelector("#btn");

button.addEventListener("click", (e)=>{
 e.preventDefault();
 if(input.value === "") {
  alert("Please enter a task!");
 }else{
  const li=document.createElement("li");
  li.innerHTML=input.value;
  listContainer.appendChild(li);
  const span =document.createElement("span");
  span.innerHTML="\u00d7";
  li.appendChild(span);
 }
 input.value='';
 savaData();
})

listContainer.addEventListener( "click" ,(e)=>{
  if(e.target.tagName==="SPAN"){
  e.target.parentElement.remove();
  savaData();
  }else{
    e.target.tagName==="LI";
    e.target.classList.toggle("checked");
    savaData();
  }
},false)

function savaData(){
  localStorage.setItem('Data',listContainer.innerHTML);
}
function showData(){
  listContainer.innerHTML=localStorage.getItem('Data');
}
showData();


