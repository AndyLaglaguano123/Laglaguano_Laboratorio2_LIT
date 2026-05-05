import { LitElement, css, html } from 'lit';

class MyFooter extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    footer {
      background-color: #1a202c;
      color: white;
      padding: 2rem 0;
      text-align: center;
      border-top: 3px solid #2d3748;
    }

    .wrapper {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
    }

    p {
      margin: 0;
      font-size: 0.95rem;
      color: #cbd5e0;
    }
  `;

  render() {
    return html`
      <footer>
        <div class="wrapper">
          <p>2026 Mi Sitio Web. Todos los derechos reservados.</p>
        </div>
      </footer>
    `;
  }
}

customElements.define('my-footer', MyFooter);
