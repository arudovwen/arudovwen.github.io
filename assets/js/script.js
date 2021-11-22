
var loader = document.getElementById("loader");

document.getElementById("year").innerHTML = new Date().getFullYear();

window.addEventListener("load", () => {
  console.log('workimg');
  loader.classList.add("animated", "slideOutUp");
});
