import { newE2EPage } from '@stencil/core/testing';

describe('app-shell', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-shell></app-shell>');

    const element = await page.find('app-shell');
    expect(element).toHaveClass('hydrated');
  });
});
