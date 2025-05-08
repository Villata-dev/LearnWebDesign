const routes = {
    "/": "/views/home.html",
    "/login": "/views/login.html",
    "/editor": "/views/editor.html",
    "/logros": "/views/logros.html",
    "/portafolio": "/views/portafolio.html"
  };
  
  async function loadContent(path) {
    const route = routes[path] || routes["/"];
    const res = await fetch(route);
    const html = await res.text();
    document.getElementById("content").innerHTML = html;
  }
  
  function onNavClick(event) {
    if (event.target.matches("a[data-link]")) {
      event.preventDefault();
      const path = event.target.getAttribute("href");
      history.pushState({}, "", path);
      loadContent(path);
    }
  }
  
  window.addEventListener("popstate", () => {
    loadContent(window.location.pathname);
  });
  
  document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", onNavClick);
    loadContent(window.location.pathname);
  });