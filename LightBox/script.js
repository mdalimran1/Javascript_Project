//function to include html popup

function popupHtml() {
  let htmlpass =
    '<div id="popdiv" class="arrow_div"><span id="close" onclick ="closePoop()"><img id="close" class="arrowchg" src="Picture/close.png" alt="close"></span><img id="leftarrow" class="arrowchg" src="Picture/leftarrow.png" alt="right"><img id="rightarrow" class="arrowchg" src="Picture/rightarrow.png" alt="left"><img id="popimg" class="imgchngpop" src="Picture/img1.jpg" alt="img1"></div>';

  //include html code in body into 1st child
  let addDiv = document.createElement("div");
  addDiv.innerHTML = htmlpass;
  document.body.insertBefore(addDiv, document.body.firstChild);
}

let imgcall;

//this funtion create for all img call by perametter by arguments
function Callclass(callclass) {
  //select all images by pass perametter
  imgcall = document.getElementsByClassName(callclass);

  for (let i = 0; i < imgcall.length; i++) {
    //add cursor
    imgcall[i].style.cursor = "pointer";

    //addEventListener in all images
    imgcall[i].addEventListener("click", function () {
      //select all imgs path and popup
      document.getElementById("popimg").src = this.src;

      document.getElementById("popdiv").style.display = "block";
      
      arrowcheack();
    });
  }

  //popHtml function call
  popupHtml();

  //left arrow function call
  document.getElementById("leftarrow").addEventListener("click", function () {
    leftArrow();
  });

  //right arrow function call
  document.getElementById("rightarrow").addEventListener("click", function () {
    rightArrow();
  });
}

//close function for close button
function closePoop() {
  document.getElementById("popimg").src = "";
  document.getElementById("popdiv").style.display = "none";
}

//leftarrow funtion

function leftArrow() {
  currentArrow();
  current--;
  document.getElementById("popimg").src = imgcall[current].src;
  arrowcheack();
}

//rightarrow function

function rightArrow() {
  currentArrow();
  current++;
  document.getElementById("popimg").src = imgcall[current].src;
  arrowcheack();
}

//current function for know to left right current img

let current;
function currentArrow() {
  for (let i = 0; i < imgcall.length; i++) {
    //for current img index

    if (imgcall[i].src == document.getElementById("popimg").src) {
      current = i;
    }
  }
}

//arrow cheack function
function arrowcheack() {
  currentArrow();
  if (current == "0") {
    document.getElementById("leftarrow").style.display = "none";
    document.getElementById("rightarrow").style.display = "block";
  } else if (current == imgcall.length - 1) {
    document.getElementById("rightarrow").style.display = "none";
    document.getElementById("leftarrow").style.display = "block";
  } else {
    document.getElementById("rightarrow").style.display = "block";
    document.getElementById("leftarrow").style.display = "block";
  }
}
