const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("is-active");
  menu.classList.toggle("menu-active");
});

window.addEventListener("scroll", () => {
  hamburger.classList.remove("is-active");
  menu.classList.remove("menu-active");
  },{ passive: true }
);

const loader = document.querySelector(".loader");

function loaderActive() {
  loader.classList.add("loader-active")
}

function loaderActiveTime() {
  setInterval(loaderActive, 1000);
}

window.onload = loaderActiveTime();