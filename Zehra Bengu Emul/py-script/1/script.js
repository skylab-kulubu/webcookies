const btn = document.getElementById("btn");
const main = document.querySelector(".main");
const img = document.querySelector(".img");

btn.addEventListener("click", () => {
  main.classList.toggle("show");
  img.classList.toggle("show");
  btn.classList.add("none");
});
