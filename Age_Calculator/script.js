const input = document.querySelector( '#date' );
input.max = new Date().toISOString().split( 'T' )[0];


const result = document.querySelector('#result');

const ageCalculate =()=>{
  
  let birthdayDate =new Date(input.value);

  let d1 = birthdayDate.getDate();
  let m1 = birthdayDate.getMonth()+1;
  let y1 = birthdayDate.getFullYear();
  
  let todayDate = new Date();
  let d2,m2,y2;
  d2 = todayDate.getDate();
  m2 = todayDate.getMonth();
  y2 = todayDate.getFullYear();
  
  let d3,m3,y3;
  y3 =y2-y1;

  if(m2 >= m1){
    m3=m2-m1;
  }else{
    y3--;
    m3=12+m2-m1;
  }
  
  if(d2 >= d1){
    d3=d2-d1;
  }else{
    m3--;
    d3=getDaysInMonth(y1,m1) + d2 -d1;
    
  }

  if(m3<0){
    m3 = 11;
    y3--;
  }
  result.innerHTML=`You are <span>${y3}</span> years <span>${m3}</span> months <span>${d3}</span> days old.`;
}


const getDaysInMonth =(year,month)=>{
  return new Date(year,month,0).getDate();
}