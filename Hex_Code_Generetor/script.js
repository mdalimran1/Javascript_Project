const button=document.getElementById("btn");
const copy=document.getElementById("copy");
const background =document.querySelector(".color");


function HexColor(){
const colors='0123456789abcdef';
let heshTag='#';
for(let i=0;i<6;i++){


heshTag = heshTag+colors[Math.floor(Math.random()*16)];
}

return heshTag;
}



button.addEventListener( "click", ()=>{
  
  let hexColors=HexColor();
  button.style.backgroundColor=hexColors;
  copy.style.backgroundColor=hexColors;
  copy.innerHTML=`${hexColors}`
  background.style.backgroundColor=hexColors;
  
})

copy.addEventListener( "click", ()=>{

  navigator.clipboard.writeText(copy.innerHTML);

  alert("Copied the HexCode");
})
