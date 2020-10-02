import { Component, h, Element, Prop } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.scss',
  shadow: true,
})
export class MyComponent {

  @Element() private element: HTMLElement;
  imageEl!: HTMLImageElement;
  figureEl!: HTMLElement;

  @Prop() altText: string;
  @Prop() imgSrc: string;

  handleIntersect = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        this.loadImage();
        observer.unobserve(this.element);
      }
    });
  }

  loadImage() {
    if (this.imageEl) {
      this.imageEl.addEventListener('load', () => {
        window.requestAnimationFrame(() => {
          this.figureEl.classList.add('loaded');
        });
      });

      this.imageEl.addEventListener('error', () => console.log('error'));

      this.imageEl.src = this.imageEl.dataset.url;
    }
  }

  createObserver() {
    const options = {
      root: null,
      threshold: 0,
    };

    const observer = new IntersectionObserver(this.handleIntersect, options);

    observer.observe(this.element);
  }

  componentDidLoad() {
    if (window['IntersectionObserver']) {
      this.createObserver();
    } else {
      this.loadImage();
    }
  }

  render() {
    return (
      <figure ref={(el) => this.figureEl = el as HTMLElement} class="image__wrapper">
        <my-spinner class="image__spinner"></my-spinner>
        <img ref={(el) => this.imageEl = el as HTMLImageElement} class="image__item" data-url={this.imgSrc} alt={this.altText} />
      </figure>
    );
  }
}
