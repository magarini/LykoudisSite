function toggleBurger() {
    var x = document.querySelector(".menu");
    var navBar=document.querySelector(".burgerMenu");

    if (x.style.display === "flex") {
      x.style.display = "none";
      navBar.style.backgroundColor="transparent"

    } else {
      x.style.display = "flex";
      navBar.style.backgroundColor="#0E0E0E"
    }
  } 