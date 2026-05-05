import { LitElement, css, html } from 'lit';

class MiFaq extends LitElement {
  static properties = {
    items: { type: Array },
    openIndex: { state: true }
  };

  constructor() {
    super();
    this.items = [];
    this.openIndex = -1;
  }

  static styles = css`
    :host {
      display: block;
    }

    .faq-list {
      display: grid;
      gap: 14px;
    }

    .faq-item {
      border: 1px solid #e5e5e5;
      border-radius: 16px;
      background: #fafafa;
      overflow: hidden;
      transition: box-shadow 180ms ease, border-color 180ms ease, transform 180ms ease;
    }

    .faq-item[data-open='true'] {
      border-color: #cfcfcf;
      box-shadow: 0 12px 24px rgba(0, 0, 0, 0.06);
      transform: translateY(-2px);
    }

    button {
      width: 100%;
      border: 0;
      background: transparent;
      cursor: pointer;
      padding: 18px 20px;
      display: grid;
      grid-template-columns: auto 1fr auto;
      gap: 14px;
      align-items: center;
      text-align: left;
      font: inherit;
      color: #111;
    }

    .faq-number {
      width: 34px;
      height: 34px;
      border-radius: 50%;
      display: grid;
      place-items: center;
      background: #111;
      color: #fff;
      font-weight: bold;
      font-size: 0.95rem;
    }

    .faq-question {
      font-size: 1.05rem;
      font-weight: 700;
    }

    .faq-icon {
      font-size: 1.4rem;
      line-height: 1;
      color: #444;
      transition: transform 180ms ease;
    }

    .faq-item[data-open='true'] .faq-icon {
      transform: rotate(45deg);
    }

    .faq-answer {
      padding: 0 20px 20px 68px;
      color: #555;
      line-height: 1.6;
    }

    @media (max-width: 640px) {
      button {
        grid-template-columns: auto 1fr;
      }

      .faq-icon {
        display: none;
      }

      .faq-answer {
        padding-left: 20px;
      }
    }
  `;

  toggleItem(index) {
    this.openIndex = this.openIndex === index ? -1 : index;
  }

  render() {
    return html`
      <div class="faq-list">
        ${this.items.map((item, index) => {
          const isOpen = this.openIndex === index;

          return html`
            <article class="faq-item" data-open=${isOpen ? 'true' : 'false'}>
              <button
                type="button"
                aria-expanded=${isOpen ? 'true' : 'false'}
                @click=${() => this.toggleItem(index)}
              >
                <span class="faq-number">${index + 1}</span>
                <span class="faq-question">${item.question}</span>
                <span class="faq-icon">+</span>
              </button>
              ${isOpen ? html`<div class="faq-answer">${item.answer}</div>` : null}
            </article>
          `;
        })}
      </div>
    `;
  }
}

customElements.define('mi-faq', MiFaq);
