let check = false;

function toggleMenu() {
  if (check == false) {
    document.getElementById("hamburger-menu").style.position = "absolute";
    document.getElementById("hamburger-menu").style.zIndex = 1;
    document.getElementById("hamburger-menu").style.visibility = "visible";
    check = true;
  } else {
    check = false;
    document.getElementById("hamburger-menu").style.position = "fixed";
    document.getElementById("hamburger-menu").style.zIndex = -1;
    document.getElementById("hamburger-menu").style.visibility = "hidden";
  }
}

// window.onload = function() {
//   toggleMenu();
// }

// function navbarOff() {
//   document.getElementById("navbar").style.display = "none";
// }

// function navbarOn() {
//   document.getElementById("navbar").style.display = "grid";
// }
