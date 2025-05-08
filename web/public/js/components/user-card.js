class UserCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    // Estructura del componente
    this.shadowRoot.innerHTML = `
      <style>
        .card {
          border: 1px solid #ccc;
          padding: 1rem;
          border-radius: 8px;
          max-width: 250px;
          box-shadow: 2px 2px 6px rgba(0,0,0,0.1);
          font-family: sans-serif;
          background-color: #f9f9f9;
        }

        .card img {
          width: 100%;
          border-radius: 8px;
        }

        .card h3 {
          margin: 0.5rem 0 0.2rem;
          font-size: 1.2rem;
        }

        .card p {
          margin: 0;
          font-size: 0.95rem;
          color: #555;
        }
      </style>

      <div class="card">
        <img src="https://via.placeholder.com/250x150" alt="User Image">
        <h3>Nombre del Usuario</h3>
        <p>Descripción del usuario aquí</p>
      </div>
    `;
  }
}

// Registrar el componente personalizado
customElements.define('user-card', UserCard);
