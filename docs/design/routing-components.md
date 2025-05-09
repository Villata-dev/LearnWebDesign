# Lista de Rutas #

Ruta	Descripción
/	Página de inicio
/login	Página de login
/dashboard	Panel de usuario (progreso, logros)
/profile	Perfil de usuario
/new-portfolio	Crear nuevo portafolio
/saved-portfolios	Ver portafolios guardados
/share-portfolio	Compartir portafolio
* (fallback)	Página no encontrada (404)

# Enfoque de Ruteo (CSS/JS) + Justificación + Código clave #

➤ Enfoque
JavaScript puro con window.history.pushState para cambiar rutas sin recargar.

window.addEventListener('popstate', …) para manejar los botones atrás/adelante.

CSS solo para estilos, no maneja visibilidad entre rutas (todo lo controla JS).

 # Justificación #
Permite comportamiento SPA (Single Page Application) ligero.

Reduce dependencias externas.

Fácil de mantener en proyectos educativos.

window.addEventListener('popstate', () => this.renderPage(window.location.pathname));

document.querySelectorAll('a[data-route]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const path = link.getAttribute('href');
    window.history.pushState({}, '', path);
    this.renderPage(path);
  });
});

Web Component Creado
Etiqueta: <app-router>

Propósito: Encapsular la lógica de ruteo, renderizar contenido dinámico dentro de un Shadow DOM.

# Relación con Arquitecturas SPA #
- El componente convierte la app en una Single Page Application.

- Cambia vistas dinámicamente según la URL.

- Usa el navegador para mantener historial sin recargar la página.

- Permite ampliar el proyecto con más rutas, animaciones o transiciones.

# Instrucciones de Prueba #
- Levanta la app en local (localhost o servidor de pruebas).

- Haz clic en los enlaces de navegación (<a data-route>).

- Verifica que el contenido cambia sin recargar.

- Usa los botones atrás/adelante del navegador → confirma que actualiza correctamente.

- Escribe una ruta inválida (como /no-existe) → debe mostrar la página 404.
