import { newE2EPage } from '@stencil/core/testing';

describe('Exercise 4', () => {
  it('listens for an event and renders a toast', async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <todo-notification>
        <todo-item name="Some task"></todo-item>
      </todo-notification>`
    );

    let element = await page.find('todo-notification >>> .wrapper');
    expect(element).toEqualHtml(`
      <div class="wrapper"></div>
    `)

    const item = await page.find('todo-item')
    await item.click()

    element = await page.find('todo-notification >>> .wrapper');
    expect(element).toEqualHtml(`
      <div class="wrapper">
        <div class="toast">
          Some task checked
        </div>
      </div>
    `)
  });
});
