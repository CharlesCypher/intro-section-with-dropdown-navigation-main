const hamburger = document.getElementById("menu");
const hamburgerClose = document.getElementById("close__menu");
const feature = document.getElementById("feature");
const sideFeature = document.getElementById("side__feature");
const company = document.getElementById("company");
const sideCompany = document.getElementById("side__company");
const downArrow0 = document.getElementById("down__arrow0");
const downArrow1 = document.getElementById("down__arrow1");
const sideDownArrow0 = document.getElementById("side__downarrow0");
const sideDownArrow1 = document.getElementById("side__downarrow1");
const dropDown0 = document.getElementById("drop__down0");
const dropDown1 = document.getElementById("drop__down1");
const sideDropDown0 = document.getElementById("side__dropdown0");
const sideDropDown1 = document.getElementById("side__dropdown1");
const sideBar = document.getElementById("side__bar");
const main = document.getElementById("main");

feature.addEventListener("click", () => {
  downArrow0.classList.toggle("is-active");
  dropDown0.classList.toggle("show");
});
sideFeature.addEventListener("click", () => {
  sideDownArrow0.classList.toggle("is-active");
  sideDropDown0.classList.toggle("drop-active");
});
company.addEventListener("click", () => {
  downArrow1.classList.toggle("is-active");
  dropDown1.classList.toggle("show");
});
sideCompany.addEventListener("click", () => {
  sideDownArrow1.classList.toggle("is-active");
  sideDropDown1.classList.toggle("drop-active");
});
main.addEventListener("click", () => {
  downArrow0.classList.remove("is-active");
  dropDown0.classList.remove("show");
  downArrow1.classList.remove("is-active");
  dropDown1.classList.remove("show");
  sideBar.classList.remove("slide");
});
let sideBarClass = sideBar.classList.contains("slide");
hamburger.addEventListener("click", () => {
  sideBar.classList.toggle("slide");
});
hamburgerClose.addEventListener("click", () => {
  sideBar.classList.remove("slide");
  sideBar.classList.add("transit");
});
