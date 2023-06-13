// Función para alternar el modo oscuro
function toggleDarkMode() {
  const body = document.querySelector("body");
  const button = document.querySelector(".dark_mode_btn");

  if (body.classList.contains("dark-mode")) {
    body.classList.remove("dark-mode");
    button.classList.remove("dark-mode");
    localStorage.setItem("darkMode", "false");
  } else {
    body.classList.add("dark-mode");
    button.classList.add("dark-mode");
    localStorage.setItem("darkMode", "true");
  }
}

// Verificar el estado del modo oscuro almacenado en el localStorage al cargar la página
document.addEventListener("DOMContentLoaded", function () {
  const darkMode = localStorage.getItem("darkMode");

  if (darkMode === "true") {
    document.body.classList.add("dark-mode");
    document.querySelector(".dark_mode_btn").classList.add("dark-mode");
  }
});

// Agregar evento de clic al botón
document
  .querySelector(".dark_mode_btn")
  .addEventListener("click", toggleDarkMode);
