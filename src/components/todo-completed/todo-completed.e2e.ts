import { newE2EPage } from '@stencil/core/testing';

describe('Exercise 2', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<todo-completed completed="5" total="10"></todo-completed>');
    const element = await page.find('todo-completed');
    expect(element).toEqualHtml(`
      <todo-completed class="hydrated" completed="5" total="10">
        <mock:shadow-root>
          <span>
            You have completed 5 out of 10 items.
          </span>
        </mock:shadow-root>
      </todo-completed>
    `);
  });
});
