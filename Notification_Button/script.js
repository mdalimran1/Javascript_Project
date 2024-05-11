const notification = document.querySelector('.notification');

const success ='<i class="fa-solid fa-circle-check"></i> Successfully submitted';
const  error = '<i class="fa-solid fa-circle-xmark"></i> Please fix error!'; 
const  invalid = '<i class="fa-solid fa-circle-exclamation"></i> Invalid input,check again'; 

const showMessage = (msg) => {
const showMessage =document.createElement( "div" );
showMessage.classList.add('message')
showMessage.innerHTML =msg;
notification.appendChild(showMessage);

if(msg.includes('error')){
    showMessage.classList.add('error');
}
if(msg.includes('Invalid')){
    showMessage.classList.add('invalid');
}

setTimeout(()=>{
showMessage.remove();
},5000);
}







