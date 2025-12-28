const html = document.querySelector("html");
const toggleButton = document.getElementById("toggle-theme");

toggleButton.addEventListener("click", () => {
  console.log("Toggle theme button clicked");
  html.classList.toggle("dark");
});
