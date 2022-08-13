let themeDots = document.getElementsByClassName("theme-dot");
let themeStyle = document.getElementById("theme-style");
let theme = localStorage.getItem("theme");

if (theme === null) {
  setTheme("light-mode");
} else {
  setTheme(theme);
}

for (let i = 0; themeDots.length > i; i++) {
  themeDots[i].addEventListener("click", function () {
    setTheme(themeDots[i].id);
  });
}

function setTheme(mode) {
  if (mode === "light-mode") {
    themeStyle.href = "default.css";
  }
  if (mode === "blue-mode") {
    themeStyle.href = "blue.css";
  }
  if (mode === "green-mode") {
    themeStyle.href = "green.css";
  }
  if (mode === "purple-mode") {
    themeStyle.href = "purple.css";
  }

  localStorage.setItem("theme", mode);
}
