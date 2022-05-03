const cssStylesheet = document.getElementById("theme-css");
const toggleBtn = document.getElementById("toggle-theme");

toggleBtn.addEventListener("click", changeTheme);

function changeTheme() {
  const oldTheme = getTheme();

  let newTheme;

  newTheme = oldTheme === "dark" ? (newTheme = "light") : (newTheme = "dark");

  localStorage.setItem("theme", newTheme);
  cssStylesheet.href = `./app/css/${newTheme}.css`;
}

function getTheme() {
  let theme = localStorage.getItem("theme");

  if (theme === null) {
    theme = "dark";
    localStorage.setItem("theme", theme);
  }

  return theme;
}

(() => {
  let theme = getTheme();
  cssStylesheet.href = `./app/css/${theme}.css`;
})();
