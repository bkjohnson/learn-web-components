import { newE2EPage } from '@stencil/core/testing';

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#getting_a_random_integer_between_two_values
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}


describe('Exercise 1', () => {
  it('renders the provided props', async () => {
    const page = await newE2EPage();

    await page.setContent('<my-component first="John" middle="F." last="Kennedy"></my-component>');
    const element = await page.find('my-component');
    expect(element).toEqualHtml(`
      <my-component first="John" middle="F." last="Kennedy" class="hydrated">
        <mock:shadow-root>
          <div>
            Hello, World! I'm John F. Kennedy
          </div>
        </mock:shadow-root>
      </my-component>
    `);
  });
});

describe('Exercise 2', () => {
  it('renders using the new custom props', async () => {
    const page = await newE2EPage();

    const total = getRandomInt(1, 40);
    const completed = getRandomInt(0, total);

    await page.setContent(`<todo-completed completed="${completed}" total="${total}"></todo-completed>`);

    const element = await page.find('todo-completed');
    expect(element).toEqualHtml(`
      <todo-completed class="hydrated" completed="${completed}" total="${total}">
        <mock:shadow-root>
          <span>
            You have completed ${completed} out of ${total} items.
          </span>
        </mock:shadow-root>
      </todo-completed>
    `);
  });
});

describe('Exercise 3', () => {
  it('fires a custom event when toggled', async () => {
    const page = await newE2EPage();
    await page.setContent('<todo-item name="Take compost out"></todo-item>');

    const toggleSpy = await page.spyOnEvent('todoItemToggled');

    const item = await page.find('todo-item >>> label');
    await item .click();

    expect(toggleSpy).toHaveReceivedEventTimes(1);
    expect(toggleSpy).toHaveReceivedEventDetail({name: 'Take compost out', checked: true})
  });
});


describe.skip('Exercise 4', () => {
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


describe.skip('Exercise 5', () => {
  it('renders items using lifecycle method', async () => {
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

    await new Promise(r => setTimeout(r, 4000));

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
