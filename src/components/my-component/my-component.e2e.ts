import { newE2EPage } from '@stencil/core/testing';

describe('Exercise 1', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<my-component></my-component>');
    const element = await page.find('my-component');
    expect(element).toEqualHtml(`
      <my-component class="hydrated">
        <mock:shadow-root>
          <div>
            Hello, World! I'm John
          </div>
        </mock:shadow-root>
      </my-component>
    `);
  });
});
