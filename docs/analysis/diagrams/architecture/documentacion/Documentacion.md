

# 📄 docs/design/routing-components.md

## 📍 Lista de Rutas

* `/` → Página de inicio
* `/login` → Página de inicio de sesión
* `/about` → Página “Acerca de”
* `*` → Página no encontrada (404)

---

## ⚙️ Enfoque de Ruteo (CSS/JS) + Justificación + Código clave

### ➤ Enfoque utilizado

Ruteo con JavaScript y CSS, utilizando atributos `data-route` en los componentes.

### ➤ Justificación

* Simplicidad → No se requieren librerías externas.
* Permite manejar rutas de manera dinámica sin necesidad de recargar la página.
* Ideal para pequeñas SPA.

### ➤ Código clave

```js
window.addEventListener('popstate', handleRoute);

function handleRoute() {
  const path = window.location.pathname;
  document.querySelectorAll('main > *').forEach(c => c.style.display = 'none');
  document.querySelector(`[data-route="${path}"]`)?.style.display = 'block' ||
  document.querySelector('[data-route="*"]').style.display = 'block';
}
```

---

## 🧩 Web Component Creado

* **Etiqueta:** `<app-router>`
* **Propósito:** Encapsula la lógica de ruteo dentro de un componente personalizado.

### ➤ Código clave

```js
class AppRouter extends HTMLElement {
  connectedCallback() {
    window.addEventListener('popstate', () => this.render());
    this.render();
  }

  render() {
    const path = window.location.pathname;
    this.querySelectorAll('[data-route]').forEach(el => el.style.display = 'none');
    this.querySelector(`[data-route="${path}"]`)?.style.display = 'block' ||
    this.querySelector('[data-route="*"]').style.display = 'block';
  }
}

customElements.define('app-router', AppRouter);
```

---

## 🏗️ Relación con Arquitecturas SPA

* El ruteo dinámico permite mostrar y ocultar componentes sin recargar la página.
* Simula el comportamiento de frameworks SPA (como React Router o Vue Router) de forma manual.
* El Web Component organiza el ruteo como parte de una arquitectura desacopl