import { LitElement, css, html } from 'lit';

class Card extends LitElement {
  static properties = {
    title: { type: String },
    description: { type: String },
    src: { type: String }
  };

  static styles = css`
    :host {
      display: block;
      animation: slideUp 0.6s ease-out var(--card-delay, 0ms) backwards;
    }

    @keyframes slideUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }

      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .card {
      background: white;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      height: 100%;
      display: flex;
      flex-direction: column;
    }

    .card:hover {
      transform: translateY(-8px);
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
    }

    img {
      width: 100%;
      height: 250px;
      object-fit: cover;
      display: block;
    }

    .card-content {
      padding: 1.5rem;
      flex: 1;
      display: flex;
      flex-direction: column;
    }

    .card-label {
      font-size: 0.75rem;
      color: #718096;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      font-weight: 700;
      margin-bottom: 0.5rem;
    }

    h2 {
      font-size: 1.5rem;
      color: #1a202c;
      margin: 0 0 0.75rem;
      font-weight: 600;
    }

    p {
      font-size: 0.95rem;
      color: #4a5568;
      line-height: 1.6;
      margin: 0;
      flex: 1;
    }
  `;

  render() {
    return html`
      <div class="card">
        <img src=${this.src} alt=${this.title} />
        <div class="card-content">
          <span class="card-label">Galería</span>
          <h2>${this.title}</h2>
          <p>${this.description}</p>
        </div>
      </div>
    `;
  }
}

customElements.define('my-card', Card);
