import { Component, h } from '@stencil/core';

@Component({
  tag: 'lazy-spinner',
  styleUrl: 'lazy-spinner.scss',
  shadow: true,
})
export class LazySpinner {
  render() {
    return (
      <div class="ripple">
        <div class="ripple__circle"></div>
        <div class="ripple__circle ripple__inner-circle"></div>
      </div>
    );
  }
}
