const slider = document.getElementById("theme");
const html = document.getElementById("html");
const home = document.querySelector(".home-icon");
const menuImage = document.querySelector(".menu-fern");
const endImage = document.querySelector(".fern");
const profile = document.querySelector(".profile-photo");
const contactFormInfo = document.getElementById("contact-form-info");
const loadingElement = document.getElementById("loading");
const projects = document.querySelector(".projects-top");
const menu = document.querySelector(".projects-menu");
const menuItems = document.querySelectorAll(".menuItem");

slider.addEventListener("click", () => {
  if (html.classList.contains("dark")) {
    html.classList.remove("dark");
    html.classList.add("light");
    home.src = "assets/icons/home-black.svg";
    menuImage.src = "assets/images/fern_black.svg";
    endImage.src = "assets/images/fern_black.svg";
    profile.src = "assets/images/user_black.svg";
  } else {
    html.classList.remove("light");
    html.classList.add("dark");
    home.src = "assets/icons/home.svg";
    menuImage.src = "assets/images/fern_white.svg";
    endImage.src = "assets/images/fern_white.svg";
    profile.src = "assets/images/user.svg";
  }
});

projects.addEventListener("mouseover", () => {
  menu.classList.add("visible");
});
menu.addEventListener("mouseover", () => {
  menu.classList.add("visible");
});
menu.addEventListener("mouseout", () => {
  menu.classList.remove("visible");
});

if (menuItems.length !== 0) {
  menuItems.forEach((menuItem) => {
    menuItem.addEventListener("click", () => {
      menu.classList.remove("visible");
    })
  })
};

document.forms["contact"].addEventListener("submit", (event) => {
  event.preventDefault();
  loadingElement.style.display = "block";
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
      loadingElement.style.display = "none";
    })
    .catch((error) => {
      contactFormInfo.textContent =
        "Error sending message (" +
        error.message +
        "). Please try again later.";
      setTimeout(() => {
        document.getElementById("contact").reset();
      }, 2000);
      loadingElement.style.display = "none";
    });
});
