const rootDiv = document.getElementById('root');
const contentDiv = document.getElementById('content');
const routes = {
    '/': `
        <div class="homepage-container">
            <h1>Bienvenido a Learn Web Design</h1>
            <p>Explora nuestros cursos y comienza tu camino en el diseño web.</p>
            </div>
    `,
    '/login': `
        <div class="login-container">
            <h1>LearnWebDesign</h1>
            <input type="text" placeholder="Nombre de usuario">
            <input type="password" placeholder="Clave">
            <button>Ingresar</button>
            <a href="#">¿Olvidaste tu clave?</a>
        </div>
    `,
    '/dashboard': `
        <div class="dashboard-container">
            <h1>Progreso de Usuario</h1>
            <div class="progress-overview">
                <div class="summary">
                    <h2>Resumen de Logros</h2>
                    <div class="circular-progress">
                        <svg width="120" height="120">
                            <circle cx="60" cy="60" r="50" stroke="#e0e0e0" stroke-width="8" fill="none"></circle>
                            <circle cx="60" cy="60" r="50" stroke="#007bff" stroke-width="8" fill="none" stroke-dasharray="calc(314 * 0.6) 314" transform="rotate(-90 60 60)"></circle>
                            <text x="60" y="70" text-anchor="middle" font-size="20">60%</text>
                        </svg>
                        <p>60%</p>
                    </div>
                </div>
                <div class="tasks-progress">
                    <h2>Progreso de Tareas e Insignias</h2>
                    <div class="bar-chart">
                        <div class="bar-group">
                            <label>Tareas completadas</label>
                            <div class="bar-container">
                                <div class="bar completed" style="height: 60%;"></div>
                                <div class="bar total" style="height: 100%;"></div>
                                <span>60%</span>
                            </div>
                        </div>
                        <div class="bar-group">
                            <label>Tareas subidas</label>
                            <div class="bar-container">
                                <div class="bar completed" style="height: 40%;"></div>
                                <div class="bar total" style="height: 100%;"></div>
                                <span>40%</span>
                            </div>
                        </div>
                        <div class="bar-group">
                            <label>Insignias obtenidas</label>
                            <div class="bar-container">
                                <div class="bar completed" style="height: 80%;"></div>
                                <div class="bar total" style="height: 100%;"></div>
                                <span>80%</span>
                            </div>
                        </div>
                        <div class="legend">
                            <span class="completed-label"></span> Completado
                            <span class="total-label"></span> Total
                        </div>
                    </div>
                </div>
                <div class="goals">
                    <h2>Metas a cumplir</h2>
                    <div class="goal-item">
                        <span class="goal-count">4</span>
                        <p>transmitir trabajo con amigos</p>
                        <span class="icon">🎬</span>
                    </div>
                    </div>
                <div class="user-profile-icon">
                    <a href="/profile" data-route="/profile">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user-circle" class="svg-inline--fa fa-user-circle fa-w-16 fa-2x" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path fill="currentColor" d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.8-149.4-69.2 22.5-39.1 66.5-66.8 119.4-66.8h60c52.9 0 96.9 27.7 119.4 66.8-38.1 42.4-90.7 69.2-149.4 69.2z"></path></svg>
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="heart" class="svg-inline--fa fa-heart fa-w-16 fa-lg" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M462.3 62.6C407.5 15.9 326 24.3 275.7 79.1c-15.6 16.2-38.5 16.2-54.1 0-50.2-54.8-131.7-63.2-186.3-16.5C21.7 127.1 0 160.1 0 197.6c0 24.7 16.4 47.3 43 60.5 4.1 2.1 8.4 4.1 12.9 5.8.2.1.5.1.7.2 4.4 1.7 8.9 3.3 13.5 4.7 40.8 12.2 87.7 16.9 131.6 16.9 43.9 0 90.8-4.7 131.6-16.9 4.6-1.4 9.1-3 13.5-4.7.2-.1.5-.1.7-.2 4.5-1.7 8.8-3.8 12.9-5.8 26.5-13.2 43-35.8 43-60.5 0-37.5-21.7-70.4-59.7-98.2z"></path></svg>
                    </a>
                </div>
            </div>
        </div>
    `,
    '/profile': `
        <div class="profile-container">
            <h1>Datos de Usuario</h1>
            <div class="user-data">
                <div class="data-item">
                    <label>Nombre:</label>
                    <span>[Nombre del Usuario]</span>
                </div>
                <div class="data-item">
                    <label>Apellidos:</label>
                    <span>[Apellidos del Usuario]</span>
                </div>
                <div class="data-item">
                    <label>Correo electrónico:</label>
                    <span>[Correo del Usuario]</span>
                </div>
                <div class="data-item">
                    <label>Número telefónico:</label>
                    <span>[Número del Usuario]</span>
                </div>
                <div class="data-item">
                    <label>Ocupación (opcional):</label>
                    <span>[Ocupación del Usuario]</span>
                </div>
            </div>
            <div class="actions">
                <button>Editar datos</button>
                <button>Guardar datos</button>
            </div>
        </div>
    `,
    '/new-portfolio': `
        <div class="new-portfolio-container">
            <h1>Nuevo Portafolio</h1>
            <div class="portfolio-creation">
                <div class="upload-section">
                    <p>¡Hola mundo!</p>
                    <div class="upload-options">
                        <button>Crear nuevo proyecto</button>
                        <button>Subir proyecto</button>
                    </div>
                </div>
                <div class="code-editor">
                    <pre><code>
                        &lt;!DOCTYPE html&gt;
                        &lt;html&gt;
                        &lt;head&gt;
                            &lt;title&gt;Mi Portafolio&lt;/title&gt;
                        &lt;/head&gt;
                        &lt;body&gt;
                            &lt;h1&gt;¡Hola mundo!&lt;/h1&gt;
                        &lt;/body&gt;
                        &lt;/html&gt;
                    </code></pre>
                </div>
            </div>
        </div>
    `,
    '/saved-portfolios': '<h1>Portafolios Guardados</h1><p>Aquí podrás gestionar tus portafolios guardados.</p>',
    '/share-portfolio': '<h1>Compartir Portafolio</h1><p>Opciones para compartir tus increíbles creaciones.</p>'
};

document.addEventListener('DOMContentLoaded', () => {
    // Delegación para todos los enlaces con data-route
    document.querySelectorAll('a[data-route]').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const path = this.getAttribute('href');
            window.history.pushState({}, '', path);
            renderPage(path);
        });
    });

    // Maneja navegación con botones del navegador (adelante/atrás)
    window.addEventListener('popstate', () => {
        renderPage(window.location.pathname);
    });

    // Renderiza la página inicial
    renderPage(window.location.pathname);
});

// Ejemplo de función de renderizado (ajusta según tu lógica real)
function renderPage(path) {
    const content = document.getElementById('content');
    switch (path) {
        case '/':
            content.innerHTML = `
                <section class="homepage-container">
                    <div class="welcome-card card">
                        <h1 class="text-large">¡Bienvenido a <span style="color:#C2BBFF;">LearnWebDesign</span>!</h1>
                        <p class="text-normal">Crea, guarda y comparte tus portafolios de desarrollo web con estilo profesional.<br>
                        Explora las herramientas, personaliza tu espacio y haz crecer tu presencia digital.</p>
                    </div>
                </section>
            `;
            break;
        case '/new-portfolio':
            content.innerHTML = `<div class="card"><h2 class="text-medium">Nuevo portafolio</h2><p class="text-normal">Aquí puedes crear un nuevo portafolio.</p></div>`;
            break;
        case '/saved-portfolios':
            content.innerHTML = `<div class="card"><h2 class="text-medium">Portafolios guardados</h2><p class="text-normal">Aquí verás tus portafolios guardados.</p></div>`;
            break;
        case '/share-portfolio':
            content.innerHTML = `<div class="card"><h2 class="text-medium">Compartir portafolio</h2><p class="text-normal">Comparte tu portafolio con otros.</p></div>`;
            break;
        case '/profile':
            content.innerHTML = `<div class="card"><h2 class="text-medium">Perfil de usuario</h2><p class="text-normal">Aquí puedes ver y editar tu perfil.</p></div>`;
            break;
        default:
            content.innerHTML = `<div class="card"><h2 class="text-medium">Página no encontrada</h2><p class="text-normal">La ruta <b>${path}</b> no existe.</p></div>`;
    }
}

class SimpleRouter extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' }); // Shadow DOM para encapsulación
        this.routes = {
            '/': `
                <div class="homepage-container">
                    <h1>Bienvenido a Learn Web Design</h1>
                    <p>Explora nuestros cursos y comienza tu camino en el diseño web.</p>
                </div>
            `,
            '/login': `
                <div class="login-container">
                    <h1>LearnWebDesign</h1>
                    <input type="text" placeholder="Nombre de usuario">
                    <input type="password" placeholder="Clave">
                    <button>Ingresar</button>
                    <a href="#">¿Olvidaste tu clave?</a>
                </div>
            `,
            '/dashboard': `
                <div class="dashboard-container">
                    <h1>Progreso de Usuario</h1>
                    <p>Detalles del progreso...</p>
                </div>
            `,
            '/profile': `
                <div class="profile-container">
                    <h1>Datos de Usuario</h1>
                    <p>Información de perfil...</p>
                </div>
            `
        };
    }

    connectedCallback() {
        this.render();
        this.setupNavigation();
        this.handlePopState();
    }

    render() {
        const path = window.location.pathname;
        const content = this.routes[path] || `<h1>Página no encontrada</h1>`;
        this.shadowRoot.innerHTML = `
            <style>
                .homepage-container, .login-container, .dashboard-container, .profile-container {
                    font-family: Arial, sans-serif;
                    padding: 16px;
                }
                .login-container input {
                    display: block;
                    margin: 8px 0;
                    padding: 8px;
                }
                .login-container button {
                    padding: 8px 16px;
                    background-color: #007bff;
                    color: white;
                    border: none;
                    cursor: pointer;
                }
                .login-container a {
                    display: block;
                    margin-top: 8px;
                    color: #007bff;
                    text-decoration: none;
                }
            </style>
            <nav>
                <a href="/" data-route="/">Inicio</a>
                <a href="/login" data-route="/login">Login</a>
                <a href="/dashboard" data-route="/dashboard">Dashboard</a>
                <a href="/profile" data-route="/profile">Perfil</a>
            </nav>
            <main>${content}</main>
        `;
    }

    setupNavigation() {
        this.shadowRoot.querySelectorAll('a[data-route]').forEach(link => {
            link.addEventListener('click', event => {
                event.preventDefault();
                const path = link.getAttribute('href');
                window.history.pushState({}, '', path);
                this.render();
            });
        });
    }

    handlePopState() {
        window.addEventListener('popstate', () => this.render());
    }
}

customElements.define('simple-router', SimpleRouter);
