const hamburger = document.querySelector(".btn");
const navItems = document.querySelector(".memu");
const btnCross = document.querySelector(".btn-cross");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active1");
  navItems.classList.toggle("active");
});

btnCross.addEventListener("click", () => {
    navItems.classList.remove("active");
});

document.querySelectorAll(".item").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active1");
    navItems.classList.remove("active");
  })
);


