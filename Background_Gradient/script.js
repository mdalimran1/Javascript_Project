const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const bgColor = document.querySelector("#bg-color");

let col1 = "#ed2020";
let col2 = "#10e754";

function backgroundColor() {
  const hexdata = "0123456789abcdef";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hexdata[Math.floor(Math.random() * 16)];
  }
  return color;
}

btn1.addEventListener("click", () => {
  const color = backgroundColor();
  document.body.style.background = `linear-gradient(90deg,${color} 0%,${col2}  100%)`;
  btn1.style.backgroundColor = color;
  bgColor.innerHTML = `background: linear-gradient(90deg,${color} 0%,${col2}  100%);`;
  btn1.innerHTML = color;
});

btn2.addEventListener("click", () => {
  const color = backgroundColor();
  document.body.style.background = `linear-gradient(90deg,${col1} 0%,${color}  100%)`;
  btn2.style.backgroundColor = color;
  bgColor.innerHTML = `background: linear-gradient(90deg,${col1} 0%,${color} 100%);`;
  btn2.innerHTML = color;
});

bgColor.addEventListener("click", () => {
  navigator.clipboard.writeText(bgColor.innerHTML);
  alert("Color code copied to clipboard!");
});
