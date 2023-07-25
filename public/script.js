var menu_btn = document.querySelector("#menu-btn");
var sidebar = document.querySelector("#sidebar");
var container = document.querySelector(".my-container");
menu_btn.addEventListener("click", () => {
  sidebar.classList.toggle("active-nav");
  container.classList.toggle("active-cont");
});


window.addEventListener('DOMContentLoaded', function() {
  if (window.innerWidth <= 600) { // Change the value to match your desired screen width for phones
    menu_btn.click();
  }
});