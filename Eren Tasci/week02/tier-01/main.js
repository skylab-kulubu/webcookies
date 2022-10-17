window.addEventListener("scroll", function () {
  let bg = document.getElementById("bg");
  bg.style.backgroundPosition = +window.pageYOffset + "px";
});
