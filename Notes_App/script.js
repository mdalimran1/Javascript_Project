const button = document.querySelector(".btn");
const noteContainer = document.querySelector(".notes");
let input = document.querySelectorAll(".input-box");

const showNotes = () => {
  noteContainer.innerHTML = localStorage.getItem("input");
};
showNotes();

const updateStorage = () => {
  localStorage.setItem("input", noteContainer.innerHTML);
};

button.addEventListener("click", () => {
  const p = document.createElement("p");
  p.setAttribute("contenteditable", "true");
  p.className = "input-box";
  const img = document.createElement("img");
  img.src = "images/delete.png";
  img.className = "delete";
  noteContainer.appendChild(p).appendChild(img);
});

noteContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    updateStorage();
  } else if (e.target.tagName === "P") {
    input = document.querySelectorAll(".input-box");
    input.forEach((note) => {
      note.onkeyup = () => {
        updateStorage();
      };
    });
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    document.execCommand("insertLineBreak");
    e.preventDefault();
  }
});
