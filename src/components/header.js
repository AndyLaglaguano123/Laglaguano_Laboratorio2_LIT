import { LitElement, css, html } from 'lit';

class MyHeader extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    header {
      background-color: #1a202c;
      color: #fff;
      padding: 2rem 0;
      border-bottom: 3px solid #2d3748;
    }

    .wrapper {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
    }

    h1 {
      margin: 0 0 1.5rem;
      font-size: 2rem;
      font-weight: 600;
    }

    nav {
      display: flex;
      flex-wrap: wrap;
      gap: 2rem;
    }

    a {
      color: white;
      text-decoration: none;
      font-weight: 500;
      transition: color 0.3s ease;
    }

    a:hover {
      color: #a0aec0;
    }
  `;

  render() {
    return html`
      <header>
        <div class="wrapper">
          <h1>Mi Sitio Web</h1>
          <nav>
            <a href="/home">Inicio</a>
            <a href="/gallery">Galería</a>
            <a href="/direction">Dirección</a>
            <a href="/contact">Contactos</a>
            <a href="/about">Sobre nosotros</a>
          </nav>
        </div>
      </header>
    `;
  }
}

customElements.define('my-header', MyHeader);
