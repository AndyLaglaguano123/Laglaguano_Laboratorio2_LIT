import { LitElement, css, html } from 'lit';
import '../components/faq.js';

class MiDirection extends LitElement {
  static properties = {
    references: { state: true },
    questions: { state: true }
  };

  constructor() {
    super();
    this.references = [
      {
        title: 'Dirección principal',
        detail: 'Av. Principal y calle Central, Latacunga, Ecuador.'
      },
      {
        title: 'Horario de atención',
        detail: 'Lunes a viernes de 08:00 a 17:00 y sábados de 09:00 a 13:00.'
      },
      {
        title: 'Punto de referencia',
        detail: 'Nos encontramos cerca del centro de la ciudad y de las rutas de transporte.'
      }
    ];

    this.questions = [
      {
        question: '¿Por dónde debo ingresar?',
        answer: 'Ingresa por la avenida principal de la ciudad y avanza hasta la zona comercial.'
      },
      {
        question: '¿Qué ruta debo seguir después?',
        answer: 'Continúa hasta la calle Central y sigue la señalización local para mantenerte en la vía correcta.'
      },
      {
        question: '¿Cómo identifico el acceso final?',
        answer: 'Ubica el acceso principal del edificio en la zona comercial, cerca del punto de referencia indicado.'
      }
    ];
  }

  static styles = css`
    :host {
      display: block;
    }

    .direction {
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
      background: linear-gradient(135deg, #ffffff, #f4f4f4);
    }

    h2 {
      margin: 0 0 12px;
      font-size: 2rem;
      color: #111827;
    }

    .intro,
    .faq-intro {
      margin: 0;
      color: #555;
      line-height: 1.7;
      max-width: 720px;
    }

    .faq-intro {
      margin-bottom: 20px;
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 18px;
    }

    article {
      border: 1px solid #e5e5e5;
      border-radius: 14px;
      background: #fafafa;
      padding: 20px;
    }

    h3 {
      margin: 0 0 10px;
      color: #111827;
    }

    p {
      margin: 0;
      color: #555;
      line-height: 1.6;
    }

    @media (max-width: 640px) {
      .hero,
      .panel {
        padding: 24px;
      }
    }
  `;

  render() {
    return html`
      <section class="direction">
        <section class="hero">
          <h2>Dirección</h2>
          <p class="intro">
            En esta sección puedes revisar nuestra ubicación general, horarios
            y una guía rápida para llegar con facilidad.
          </p>
        </section>

        <section class="panel">
          <div class="grid">
            ${this.references.map(
              (item) => html`
                <article>
                  <h3>${item.title}</h3>
                  <p>${item.detail}</p>
                </article>
              `
            )}
          </div>
        </section>

        <section class="panel">
          <h2>Cómo llegar</h2>
          <p class="faq-intro">
            Selecciona una pregunta para ver la respuesta y seguir la ruta paso a paso.
          </p>
          <mi-faq .items=${this.questions}></mi-faq>
        </section>
      </section>
    `;
  }
}

customElements.define('mi-direction', MiDirection);
