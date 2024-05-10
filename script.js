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


document.querySelectorAll(".subMenu").forEach(function(subMenu) {
  // Hide SubMenus.
 
  subMenu.style.visibility = "hidden";

  var parent = subMenu.parentNode;

  // Toggle SubMenu visibility on click.
  parent.addEventListener("click", function(event) {
      event.preventDefault(); // Prevent default link behavior
      if (subMenu.classList.contains("active")) {
          subMenu.style.visibility = "hidden";
          subMenu.classList.remove("active");
      } else {
          // Hide all other active submenus
          document.querySelectorAll('.subMenu.active').forEach(function(activeSubMenu) {
              activeSubMenu.style.visibility = 'hidden';
              activeSubMenu.classList.remove('active');
          });
          subMenu.style.visibility = "visible";
          subMenu.classList.add("active");
      }
  });

  // Prevent scroll to top when clicking on <a href="#">
  parent.querySelector('a[href="#"]').addEventListener("click", function(event) {
      event.preventDefault();
  });
});
