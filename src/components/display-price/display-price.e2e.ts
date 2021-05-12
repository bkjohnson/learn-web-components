import { newE2EPage } from '@stencil/core/testing';

describe('Exercise 2', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<display-price subtotal="40" tax="6"></display-price>');
    const element = await page.find('display-price');
    expect(element).toEqualHtml(`
      <display-price class="hydrated">
        <mock:shadow-root>
          <span>
            Your subtotal is: $40
            </span>
            </br>
            <span>
              which brings your total to $42.40
            </span>
        </mock:shadow-root>
      </display-price>
    `);
  });
});
