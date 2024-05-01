const pathSvg = ""

// navbar
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;
  const toTop = document.querySelector("#top");

  if (window.scrollY > fixedNav) {
    header.classList.add("navbar-fixed");
    toTop.classList.remove("hidden");
    toTop.classList.add("flex");
  } else {
    header.classList.remove("navbar-fixed");
    toTop.classList.remove("flex");
    toTop.classList.add("hidden");
  }
};

// hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

// klik diluar hamburger
window.addEventListener("click", function (e) {
  if (e.target != navMenu && e.target != hamburger) {
    hamburger.classList.remove("hamburger-active");
    navMenu.classList.add("hidden");
  }
});

// dark mode
const darkToggle = document.querySelector("#dark-toggle");
const html = document.querySelector("html");

darkToggle.addEventListener("click", function () {
  if (darkToggle.checked) {
    html.classList.add("dark");
    localStorage.theme = "dark";
  } else {
    html.classList.remove("dark");
    localStorage.theme = "light";
  }
});

// posisi toggle dark mode
if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
  darkToggle.checked = true;
} else {
  darkToggle.checked = false;
}


// EMAIL SEND
const names = document.querySelector("#name");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const submitForm = (e) => {
  e.preventDefault();
  const body = `name: ${names.value} <br> email: ${email.value} <br> message: ${message.value}`
  // console.log(body)

  Email.send({
    Host : "smtp.elasticemail.com",
    Username:"syahputroj@gmail.com",
    Password:"3DC92FBA59438DE7EECF6F529455F7AA0B27",
    To: 'syahputroj@gmail.com',
    From: 'syahputroj@gmail.com',
    Subject:"Pesan Dari Portfolio",
    Body:body,
}).then(
  message => alert(message)
);
}