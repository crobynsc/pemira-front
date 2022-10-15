let buttonMenu = document.querySelector("#button-menu");
let menu = document.querySelector("nav");
let layerMenu = document.querySelector("#layer-menu");
// create on click buttonMenu toggle menu
buttonMenu.addEventListener("click", function () {
  menu.classList.toggle("hidden");
  layerMenu.classList.toggle("hidden");
});
layerMenu.addEventListener("click", function () {
  menu.classList.toggle("hidden");
  layerMenu.classList.toggle("hidden");
});
