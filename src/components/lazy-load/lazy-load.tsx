import { Component, h, Element, Prop } from '@stencil/core';

@Component({
  tag: 'lazy-load',
  styleUrl: 'lazy-load.scss',
  shadow: true,
})
export class LazyLoad {
  @Element() private element: HTMLElement;
  imageEl!: HTMLImageElement;
  figureEl!: HTMLElement;

  @Prop() altText: string;
  @Prop() imgSrc: string;

  createObserver() {
    const options = {
      root: null,
      threshold: 0,
    };

    const observer = new IntersectionObserver(this.handleIntersect, options);

    observer.observe(this.element);
  }

  handleIntersect = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        this.loadImage();
        observer.unobserve(this.element);
      }
    });
  };

  loadImage() {
    if (this.imageEl) {
      this.imageEl.addEventListener('load', () => {
        window.requestAnimationFrame(() => {
          this.figureEl.classList.add('loaded');
        });
      });

      this.imageEl.addEventListener('error', () => console.warn('Image failed to load'));

      this.imageEl.src = this.imageEl.dataset.url;
    }
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
      <div ref={el => (this.figureEl = el as HTMLElement)} class="image__wrapper">
        <lazy-spinner class="image__spinner"></lazy-spinner>
        <img ref={el => (this.imageEl = el as HTMLImageElement)} class="image__item" data-url={this.imgSrc} alt={this.altText} />
      </div>
    );
  }
}
