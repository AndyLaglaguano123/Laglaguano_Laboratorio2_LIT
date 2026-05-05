import { LitElement, css, html } from 'lit';

class MiAbout extends LitElement {
  static properties = {
    sections: { state: true }
  };

  constructor() {
    super();
    this.sections = [
      {
        title: 'Quiénes somos',
        description: 'Somos una aplicación creada para mostrar imágenes y contenido visual de forma clara, ordenada y atractiva.'
      },
      {
        title: 'Nuestra misión',
        description: 'Ofrecer una experiencia sencilla para explorar galerías, información y nuevas secciones usando Lit.'
      },
      {
        title: 'Nuestra visión',
        description: 'Seguir creciendo con una estructura modular que permita agregar nuevas vistas y componentes de manera organizada.'
      }
    ];
  }

  static styles = css`
    :host {
      display: block;
    }

    .about {
      max-width: 1000px;
      margin: 0 auto;
      background: #fff;
      border-radius: 18px;
      padding: 32px;
      box-shadow: 0 10px 24px rgba(0, 0, 0, 0.08);
    }

    h2 {
      margin: 0 0 12px;
      font-size: 2rem;
      color: #111827;
    }

    .intro {
      margin: 0 0 24px;
      color: #555;
      line-height: 1.6;
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 18px;
    }

    article {
      border-radius: 14px;
      padding: 20px;
      background: linear-gradient(180deg, #ffffff, #f3f3f3);
      border: 1px solid #e5e5e5;
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
  `;

  render() {
    return html`
      <section class="about">
        <h2>Sobre nosotros</h2>
        <p class="intro">
          Esta sección presenta la información general del laboratorio ya integrada al proyecto actual.
        </p>
        <div class="grid">
          ${this.sections.map(
            (item) => html`
              <article>
                <h3>${item.title}</h3>
                <p>${item.description}</p>
              </article>
            `
          )}
        </div>
      </section>
    `;
  }
}

customElements.define('mi-about', MiAbout);
