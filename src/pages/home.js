import { LitElement, css, html } from 'lit';

class MiHome extends LitElement {
  static properties = {
    highlights: { state: true }
  };

  constructor() {
    super();
    this.highlights = [
      {
        title: 'Galería dinámica',
        description: 'Explora imágenes organizadas en tarjetas con una presentación limpia y moderna.'
      },
      {
        title: 'Navegación simple',
        description: 'Cada sección se muestra con rutas claras y componentes reutilizables.'
      },
      {
        title: 'Componentes Lit',
        description: 'Toda la interfaz fue adaptada para trabajar con Lit y mantener una estructura modular.'
      }
    ];
  }

  static styles = css`
    :host {
      display: block;
    }

    .home {
      max-width: 1100px;
      margin: 0 auto;
      display: grid;
      gap: 24px;
    }

    .hero,
    .panel {
      background: #fff;
      border-radius: 18px;
      padding: 32px;
      box-shadow: 0 10px 24px rgba(0, 0, 0, 0.08);
    }

    .hero {
      background: linear-gradient(135deg, #ffffff, #f1f1f1);
    }

    h2 {
      margin: 0 0 14px;
      font-size: 2.2rem;
      color: #111827;
    }

    .lead {
      margin: 0 0 22px;
      color: #555;
      line-height: 1.7;
      max-width: 700px;
    }

    .actions {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
    }

    .actions a {
      text-decoration: none;
      padding: 12px 18px;
      border-radius: 999px;
      font-weight: 700;
    }

    .primary {
      background: #111;
      color: #fff;
    }

    .secondary {
      background: #ececec;
      color: #111;
    }

    .grid,
    .summary {
      display: grid;
    }

    .grid {
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 18px;
    }

    .summary {
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
      gap: 16px;
    }

    article {
      border: 1px solid #e5e5e5;
      border-radius: 14px;
      padding: 20px;
      background: #fafafa;
    }

    .summary div {
      border-left: 4px solid #111;
      padding-left: 14px;
    }

    h3,
    strong {
      margin: 0 0 10px;
      color: #111827;
    }

    strong {
      display: block;
      font-size: 1.1rem;
      margin-bottom: 6px;
    }

    p {
      margin: 0;
      color: #555;
      line-height: 1.6;
    }
  `;

  render() {
    return html`
      <section class="home">
        <section class="hero">
          <h2>Bienvenido a nuestra galería</h2>
          <p class="lead">
            Este espacio adapta tu laboratorio al proyecto actual usando Lit para
            organizar el contenido visual y navegar entre secciones de forma sencilla.
          </p>
          <div class="actions">
            <a class="primary" href="/gallery">Ver galería</a>
            <a class="secondary" href="/about">Conocer más</a>
          </div>
        </section>

        <section class="panel">
          <div class="summary">
            <div>
              <strong>5 secciones</strong>
              <p>Inicio, galería, dirección, contacto y sobre nosotros.</p>
            </div>
            <div>
              <strong>Componentes Lit</strong>
              <p>Las vistas y bloques compartidos ahora siguen la misma librería del proyecto.</p>
            </div>
            <div>
              <strong>Diseño modular</strong>
              <p>La estructura permite seguir agregando páginas sin romper el enrutado.</p>
            </div>
          </div>
        </section>

        <section class="panel">
          <h2>Lo que encontrarás aquí</h2>
          <div class="grid">
            ${this.highlights.map(
              (item) => html`
                <article>
                  <h3>${item.title}</h3>
                  <p>${item.description}</p>
                </article>
              `
            )}
          </div>
        </section>
      </section>
    `;
  }
}

customElements.define('mi-home', MiHome);
