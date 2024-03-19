const hamburger = document.querySelector(".navbar__hamburger");
const header = document.querySelector("header");
const navbarLink = document.querySelector(".navbar__link");

hamburger.addEventListener("click", () => {
  navbarLink.classList.toggle("navbar__mobile");

  if (navbarLink.classList.contains("navbar__mobile")) {
    setTimeout(() => {
      hamburger.src = "assets/images/icon-close.svg";
      header.style.backgroundImage = "url()";
      header.style.backgroundColor = "black";
    }, 550);
  } else {
    setTimeout(() => {
      hamburger.src = "assets/images/icon-hamburger.svg";
      header.style.backgroundImage = "url(assets/images/mobile/image-hero.jpg)";
      header.style.backgroundColor = "";
    }, 150);
  }
});
