import { newE2EPage } from '@stencil/core/testing';

describe('lazy-load', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<lazy-load></lazy-load>');
    const element = await page.find('lazy-load');
    expect(element).toHaveClass('hydrated');
  });

  it('renders changes to the name data', async () => {
    const page = await newE2EPage();

    await page.setContent('<lazy-load></lazy-load>');
    const component = await page.find('lazy-load');
    const element = await page.find('lazy-load >>> div');
    expect(element.textContent).toEqual(`Hello, World! I'm `);

    component.setProperty('first', 'James');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm James`);

    component.setProperty('last', 'Quincy');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm James Quincy`);

    component.setProperty('middle', 'Earl');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm James Earl Quincy`);
  });
});
