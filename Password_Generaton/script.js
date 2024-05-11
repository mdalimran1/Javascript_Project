

const Input = document.querySelector('#password');
const CopyBtn = document.querySelector('#copy');
const GeneratePassword = document.querySelector('.Generatepas');

let passwordLength = 12;

const  uppercase='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const  lowercase='abcdefghijklmnopqrstuvwxyz';
const  numbers = '0123456789';
const  specialChar = "!@#$%^&*()_+~|}{[]></?-=";
const  allCharacter =uppercase+lowercase+numbers+specialChar;

const passwordGenerator = () =>{

let password ='';
password += uppercase[Math.floor(Math.random()*uppercase.length)];
password += lowercase[Math.floor(Math.random()*lowercase.length)]
password += numbers[Math.floor(Math.random()*numbers.length)]
password += specialChar[Math.floor(Math.random()*specialChar.length)]

while(passwordLength > password.length){
  password += allCharacter[Math.floor(Math.random()*allCharacter.length)]
}
Input.value=password;
}


CopyBtn.addEventListener('click',()=>{
  Input.select();
  Input.setSelectionRange(0, 99999); // For mobile devices

   // Copy the text inside the text field
  navigator.clipboard.writeText(Input.value);

  // Alert the copied text
  alert("Copied the text: " + Input.value);
})



