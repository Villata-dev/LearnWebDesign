const routes = {
  "/": "./views/home.html",
  "/login": "./views/login.html",
  "/editor": "./views/editor.html",
  "/portafolio": "./views/portafolio.html",
  "/logros": "./views/logros.html",
  "/usuario": "./views/usuario.html",
};

const loadContent = async (path) => {
  const route = routes[path] || routes["/"];
  const html = await fetch(route).then(res => res.text());
  document.getElementById("content").innerHTML = html;
};

const handleRoute = (event) => {
  event.preventDefault();
  const path = event.target.getAttribute("href");
  window.history.pushState({}, "", path);
  loadContent(path);
};

window.addEventListener("popstate", () => {
  loadContent(window.location.pathname);
});

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("a[data-link]").forEach(link => {
    link.addEventListener("click", handleRoute);
  });

  loadContent(window.location.pathname);
});