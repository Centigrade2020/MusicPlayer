const navAnimate = () => {
  const burger = document.getElementById("burger");
  const nav = document.querySelector("nav");

  burger.classList.toggle("burger-active");
  nav.classList.toggle("nav-active");
};
