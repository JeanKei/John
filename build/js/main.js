
const menuButton = document.querySelector('.icon-menu');
const menu = document.querySelector('.menu__body');
// const CloseMenuButton = document.querySelector('.icon-menu');

menuButton.addEventListener("click", (event) => {
  menu.classList.toggle("_active");
});
// CloseMenuButton.addEventListener("click", (event) => {
//   menu.classList.toggle("_active");
// });

const menuButton2 = document.querySelector('.icon-menu');
const menu2 = document.querySelector('.icon-menu');
// const CloseMenuButton = document.querySelector('.icon-menu');

menuButton2.addEventListener("click", (event) => {
  menu2.classList.toggle("_active");
});