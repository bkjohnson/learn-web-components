import { newE2EPage } from '@stencil/core/testing';

describe('Exercise 5', () => {
  it('renders with named slots', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-shell></app-shell>');

    let element = await page.find('app-shell');
    expect(element).toEqualHtml(`
      <app-shell class="hydrated">
        <mock:shadow-root>
          <slot name="top"></slot>
          <div>
            Loading...
          </div>
          <slot name="bottom"></slot>
        </mock:shadow-root>
      </app-shell>
    `)

    await new Promise(r => setTimeout(r, 2000));

    element = await page.find('app-shell');
    // Props of child components don't show up
    expect(element).toEqualHtml(`
      <app-shell class="hydrated">
        <mock:shadow-root>
          <slot name="top"></slot>
          <todo-notification class="hydrated">
            <todo-item class="hydrated"></todo-item>
            <todo-item class="hydrated"></todo-item>
            <todo-item class="hydrated"></todo-item>
          </todo-notification>
          <slot name="bottom"></slot>
        </mock:shadow-root>
      </app-shell>
    `)


  });
});
