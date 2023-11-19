// let categoryToggleBtn = document.querySelector(".category_toggle_btn");
// let category = document.querySelector(".category");
// let arrowBtn = document.querySelector("fa-angle-down", "fa-angle-up");

// categoryToggleBtn.addEventListener("click", () => {
//   category.classList.toggle("categoryOpen");
// });

// categoryToggleBtn.addEventListener("click", () => {
//   categoryToggleBtn.classList.toggle("angle_up");
// });
// let categoryToggleBtn = document.querySelector(".category");
// let CategorieIcon = document.querySelector(".fa-angle-down");

// categoryToggleBtn.addEventListenert("click", function () {
//   CategorieIcon.classList.toggle("rotate_icon");
// });

// let categoryToogleBtn = document.querySelector(".category");
// let CategoriesIcon = document.querySelector(".CategoriesIcon");

// categoryToogleBtn.addEventListener("click", () => {
//   CategoriesIcon.classList.toggle("rotate_icon");
// });

// javascript start

let navOpenBtn = document.querySelector(".bar_icon");
let navCloseBtn = document.querySelector(".nav_removeBtn");
let navLink = document.querySelector(".navlink");

navOpenBtn.addEventListener("click", () => {
  navLink.classList.add("navopen_close_btn");
});

navCloseBtn.addEventListener("click", () => {
  navLink.classList.remove("navopen_close_btn");
});

let contactWrapper = document.querySelector(".contact_wrapper");
let contactWrapperDown = document.querySelector(".icon_rotate");
let rotate90deg = document.querySelector(".contact_wrapperDown");

contactWrapperDown.addEventListener("click", function () {
  contactWrapper.classList.toggle("contactWrapper1");
});

contactWrapperDown.addEventListener("click", function () {
  rotate90deg.classList.toggle("rotate90deg");
});

let barIcon = document.querySelector(".bar_icon");
let navBar = document.querySelector(".navlink");
let navRemove = document.querySelector(".navHide");

barIcon.addEventListener("click", () => {
  navBar.classList.add("right-10px");
});

navRemove.addEventListener("click", () => {
  navBar.classList.remove("right-10px");
});
navRemove.addEventListener("mouseover", () => {
  navRemove.classList.add("navHideRotate360deg");
});
navRemove.addEventListener("mouseleave", () => {
  navRemove.classList.add("navHideRotate90deg");
});

window.addEventListener("scroll", function () {
  let header2 = document.querySelector(".header2");
  if (this.window.scrollY >= 500) {
    header2.classList.add("transform_scaleY");
  } else {
    header2.classList.remove("transform_scaleY");
  }
});

// animation;

window.addEventListener("scroll", () => {
  let animation1 = document.querySelector(".animation1");

  if (window.scrollY >= 1300) {
    animation1.classList.add("allofferanimi1");
  } else {
    // animation1.classList.remove("allofferanimi1");
  }

  let animation2 = document.querySelector(".animation2");
  if (window.scrollY >= 1300) {
    animation2.classList.add("allofferanimi2");
  } else {
    // animation2.classList.remove("allofferanimi2");
  }
  let animation3 = document.querySelector(".animation3");
  if (window.scrollY >= 1300) {
    animation3.classList.add("allofferanimi3");
  } else {
    // animation3.classList.remove("allofferanimi3");
  }
  let animation4 = document.querySelector(".animation4");
  if (window.scrollY >= 1300) {
    animation4.classList.add("allofferanimi4");
  } else {
    // animation4.classList.remove("allofferanimi4");
  }
});

window.addEventListener("scroll", () => {
  let studyresoneanimi1 = document.querySelector(".studyresoneanimi1");

  if (window.scrollY >= 4200) {
    studyresoneanimi1.classList.add("studayAnimi1");
  } else {
    // studyresoneanimi1.classList.remove("studayAnimi1");
  }
  let studyresoneanimi2 = document.querySelector(".studyresoneanimi2");

  if (window.scrollY >= 4100) {
    studyresoneanimi2.classList.add("studayAnimi2");
  } else {
    // studyresoneanimi2.classList.remove("studayAnimi2");
  }
  let studyresoneanimi3 = document.querySelector(".studyresoneanimi3");
  if (window.scrollY >= 4100) {
    studyresoneanimi3.classList.add("studayAnimi3");
  } else {
    // studyresoneanimi3.classList.remove("studayAnimi3");
  }
});
