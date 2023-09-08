const slider = document.getElementById("theme");
const html = document.getElementById("html");
const home = document.querySelector(".home-icon");
const menuFern = document.querySelector(".menu-fern");
const endFern = document.querySelector(".fern");
const profile = document.querySelector(".profile-photo");
slider.addEventListener("click", () => {
  if (html.classList.contains("dark")) {
    html.classList.remove("dark");
    html.classList.add("light");
    home.src = "assets/home-black.svg";
    menuFern.src = "assets/fern_black.svg";
    endFern.src = "assets/fern_black.svg";
    profile.src = "assets/user_black.svg";
  } else {
    html.classList.remove("light");
    html.classList.add("dark");
    home.src = "assets/home.svg";
    menuFern.src = "assets/fern_white.svg";
    endFern.src = "assets/fern_white.svg";
    profile.src = "assets/user.svg";
  }
});
