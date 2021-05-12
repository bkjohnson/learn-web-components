import { newE2EPage } from '@stencil/core/testing';

describe('todo-item', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<todo-item></todo-item>');

    const element = await page.find('todo-item');
    expect(element).toHaveClass('hydrated');
  });
});
