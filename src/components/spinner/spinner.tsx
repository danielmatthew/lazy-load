import { Component, h } from '@stencil/core';

@Component({
  tag: 'my-spinner',
  styleUrl: 'my-spinner.scss',
  shadow: true,
})
export class MySpinner {
  render() {
    return (
      <div class="ripple">
        <div class="ripple__circle"></div>
        <div class="ripple__circle ripple__inner-circle"></div>
      </div>
    );
  }
}
