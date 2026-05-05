import { LitElement, css, html } from 'lit';
import '../components/card.js';

class MiGallery extends LitElement {
  getElements() {
    return [
      {
        src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1170&q=80',
        title: 'Paisaje',
        description: 'Hermoso paisaje natural con montañas y un lago'
      },
      {
        src: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=1170&q=80',
        title: 'Perro',
        description: 'El mejor amigo del hombre'
      },
      {
        src: 'https://images.unsplash.com/photo-1519052537078-e6302a4968d4?auto=format&fit=crop&w=1170&q=80',
        title: 'Gato',
        description: 'Un gato descansando en una ventana soleada'
      },
      {
        src: 'https://images.unsplash.com/photo-1618641662184-bafefb91a542?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGVvbnxlbnwwfHwwfHx8MA%3D%3D',
        title: 'León',
        description: 'León en la sabana'
      }
    ];
  }

  static styles = css`
    :host {
      display: block;
      width: 100%;
    }

    .gallery-page {
      max-width: 1600px;
      margin: 0 auto;
      display: grid;
      gap: 2rem;
    }

    .gallery-hero {
      background: #fff;
      border-radius: 18px;
      padding: 2rem;
      box-shadow: 0 10px 24px rgba(0, 0, 0, 0.08);
    }

    .gallery-hero h2 {
      font-size: 2rem;
      color: #1a202c;
      margin: 0 0 0.75rem 0;
    }

    .gallery-hero p {
      font-size: 1rem;
      color: #4a5568;
      margin: 0;
      line-height: 1.6;
    }

    .gallery {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: 2rem;
      align-items: start;
    }
  `;

  render() {
    return html`
      <section class="gallery-page">
        <section class="gallery-hero">
          <h2>Galería</h2>
          <p>
            Explora la colección visual del laboratorio adaptada como componentes Lit,
            con tarjetas reutilizables y una presentación consistente.
          </p>
        </section>

        <section class="gallery">
          ${this.getElements().map(
            (el, index) => html`
              <my-card
                style="--card-delay: ${index * 80}ms;"
                .src=${el.src}
                .title=${el.title}
                .description=${el.description}
              ></my-card>
            `
          )}
        </section>
      </section>
    `;
  }
}

customElements.define('mi-gallery', MiGallery);
