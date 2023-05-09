function toggleBurger() {
    var x = document.querySelector(".menu");
    var navBar=document.querySelector(".burgerMenu");

    if (x.style.display === "flex") {
      x.style.display = "none";
      navBar.style.background="transparent"

    } else {
      x.style.display = "flex";
      navBar.style.background="linear-gradient(0deg, rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45))"

    }
  } 