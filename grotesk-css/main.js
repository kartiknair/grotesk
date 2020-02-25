toggle = document.querySelector(".cont");
theme = document.querySelector("#styles");

toggle.addEventListener("click", () => {
  toggle.classList.toggle("dark");
  if (theme.href.includes("light")) {
    theme.href = "../downloads/styles/grotesk.dark.css";
    localStorage.setItem("dark-mode", true);
    console.log("Set dark mode to true");
  } else {
    theme.href = "../downloads/styles/grotesk.light.css";
    localStorage.setItem("dark-mode", false);
    console.log("Set dark mode to false");
  }
});

window.addEventListener("load", () => {
  if (localStorage.getItem("dark-mode") === null) {
    localStorage.setItem("dark-mode", theme.href.includes("dark"));
    console.log("Theme includes dark? " + theme.href.includes("dark"));
  }

  if (localStorage.getItem("dark-mode") === "true") {
    theme.href = "../downloads/styles/grotesk.dark.css";
    toggle.classList.add("dark");
    console.log("localStorage says, dark mode is true");
  } else {
    theme.href = "../downloads/styles/grotesk.light.css";
    console.log("localStorage says, dark mode is false");
  }
});
