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



// Hide SubMenus.
document.querySelectorAll(".subMenu").forEach(function(subMenu) {
  subMenu.style.display = "none";
});

// Shows SubMenu when its parent is hovered.
document.querySelectorAll(".subMenu").forEach(function(subMenu) {
  var parent = subMenu.parentNode;
  parent.addEventListener("mouseover", function() {
    if (!subMenu.classList.contains("active")) {
      subMenu.style.display = "block";
      subMenu.classList.add("active");
    }
  });
});

// Hides SubMenu when mouse leaves the zone.
document.querySelectorAll(".subMenu").forEach(function(subMenu) {
  var parent = subMenu.parentNode;
  parent.addEventListener("mouseleave", function() {
    subMenu.style.display = "none";
    subMenu.classList.remove("active");
  });
});

// Prevents scroll to top when clicking on <a href="#">
document.querySelectorAll('a[href="#"]').forEach(function(anchor) {
  anchor.addEventListener("click", function(event) {
    event.preventDefault();
  });
});
