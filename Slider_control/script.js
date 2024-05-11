let flag = 0 ;

function changeslides(x) {
    flag = flag + x ;
    slides(flag);
}

slides(flag);

function slides(num) {
  let slidesClass = document.getElementsByClassName("imgcl");

    if(num == slidesClass.length){
        flag = 0;
        num = 0;
    }
    
    if(num < 0){
        flag = slidesClass.length - 1;
        num = slidesClass.length - 1;
    }

    for(let y of slidesClass){

    y.style.display ="none";

    }

  slidesClass[num].style.display = "block";

}
