const routeToFile = {
  "/": "../views/home.html",
  "/login": "../views/login.html",
  "/editor": "../views/editor.html",
  "/portafolio": "../views/portafolio.html",
  "/logros": "../views/logros.html",
  "/usuario": "../views/usuario.html"
};

// Función para cargar una vista en el contenedor principal
async function loadView(url) {
  const contentDiv = document.getElementById("content");
  try {
    const response = await fetch(routeToFile[url] || routeToFile["/"]);
    if (!response.ok) throw new Error("Error al cargar la vista");
    const html = await response.text();
    contentDiv.innerHTML = html;
  } catch (error) {
    contentDiv.innerHTML = `<h1>Error 404: Vista no encontrada</h1>`;
    console.error(error);
  }
}

// Función para manejar la navegación
function navigate(event) {
  if (event.target.matches("[data-link]")) {
    event.preventDefault();
    const url = event.target.getAttribute("href");
    history.pushState(null, null, url);
    loadView(url);
  }
}

// Configurar el enrutador al cargar la página
window.addEventListener("DOMContentLoaded", () => {
  loadView(location.pathname);
  document.body.addEventListener("click", navigate);
});

// Manejar el evento de retroceso/avance del navegador
window.addEventListener("popstate", () => {
  loadView(location.pathname);
});