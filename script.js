var logo, nav, nav1, nav2, nav3, nav4, toggled;

window.onload = function() {
  logo = document.getElementById("logo");
  nav = document.getElementById("nav");
  nav1 = document.getElementById("nav1");
  nav2 = document.getElementById("nav2");
  nav3 = document.getElementById("nav3");
  nav4 = document.getElementById("nav4");
  toggled = false;

  logo.addEventListener("click", function(e) {
    toggled = !toggled;
    var id = window.setTimeout(function() {}, 0);
    while (id--) {
      window.clearTimeout(id);
    }
    if (toggled) {
      nav.classList.add("open-nav");
      window.setTimeout(function() {nav4.classList.add("toggled-nav")}, 100);
      window.setTimeout(function() {nav3.classList.add("toggled-nav")}, 200);
      window.setTimeout(function() {nav2.classList.add("toggled-nav")}, 300);
      window.setTimeout(function() {nav1.classList.add("toggled-nav")}, 400);
    } else {
      nav1.classList.remove("toggled-nav");
      window.setTimeout(function() {nav2.classList.remove("toggled-nav")}, 200);
      window.setTimeout(function() {nav3.classList.remove("toggled-nav")}, 300);
      window.setTimeout(function() {nav4.classList.remove("toggled-nav")}, 400);
      window.setTimeout(function() {nav.classList.remove("open-nav")}, 400);
    }
  });
}