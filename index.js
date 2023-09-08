const slider = document.getElementById("theme");
const html = document.getElementById("html");
const home = document.querySelector(".home-icon");
slider.addEventListener("click", () => {
  if (html.classList.contains("dark")) {
    html.classList.remove("dark");
    html.classList.add("light");
    home.src = "assets/home-black.svg";
  } else {
    html.classList.remove("light");
    html.classList.add("dark");
    home.src = "assets/home.svg";
  }
});
