    const allClass = document.querySelectorAll(".slide_show");

    let count = 0;

    setInterval(() => {
    let slides = document.querySelector(".controll");
        slides.classList.remove("controll");

        if(count >= allClass.length - 1){

            allClass[0].classList.add("controll");
            count = 0;

        }else{
            allClass[count + 1].classList.add("controll");
            count++;

        }

    },3000);




























// const allClass = document.querySelectorAll(".slide_show");

// let index = 0;

// setInterval(()=>{

// let slides = document.querySelector(".controll");
// slides.classList.remove("controll");
// if(index >= allClass.length - 1){
//     allClass[0].classList.add("controll");
//     index = 0;
// }else{
//     allClass[index + 1].classList.add("controll");
//     index++;
// }

// },3000)

























