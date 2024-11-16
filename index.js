const slider = document.getElementById("theme");
const html = document.getElementById("html");
const home = document.querySelector(".home-icon");
const menuFern = document.querySelector(".menu-fern");
const endFern = document.querySelector(".fern");
const profile = document.querySelector(".profile-photo");
const contactFormInfo = document.getElementById("contact-form-info");

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

const projects = document.querySelector(".projects-top");
const menu = document.querySelector(".projects-menu");
const menuItems = document.getElementsByClassName("menuItem");

projects.addEventListener("mouseover", () => {
  menu.classList.add("visible");
});
menu.addEventListener("mouseover", () => {
  menu.classList.add("visible");
});
menu.addEventListener("mouseout", () => {
  menu.classList.remove("visible");
});

menuItems.forEach((menuItem) => {
  menuItem.addEventListener("click", () => {
    menu.classList.remove("visible");
  })
})

document.forms["contact"].addEventListener("submit", (event) => {
  event.preventDefault();
  contactFormInfo.textContent = "Message is being sent";
  fetch(event.target.action, {
    method: "POST",
    body: new URLSearchParams(new FormData(event.target)),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json(); // or response.text() or whatever the server sends
    })
    .then((body) => {
      contactFormInfo.textContent = body.status;
      setTimeout(() => {
        document.getElementById("contact").reset();
      }, 2000);
    })
    .catch((error) => {
      contactFormInfo.textContent =
        "Error sending message (" +
        error.message +
        "). Please try again later.";
      setTimeout(() => {
        document.getElementById("contact").reset();
      }, 2000);
    });
});
