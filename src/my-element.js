import "./components/header.js";
import "./components/footer.js";
import "./components/card.js";
import "./router/router.js";
import "./register-components.js";
import "./styles.css";


class MyElement extends HTMLElement {
  connectedCallback() {
    // El contenido se maneja por el router
    this.innerHTML = `
      <div class="content-card">
        <div class="label">PROYECTO WEB</div>
        <h1>Bienvenido</h1>
        <p>La aplicacion ya esta cargando correctamente en el navegador.</p>
      </div>
    `;
  }
}

customElements.define("my-element", MyElement);