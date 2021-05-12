import { newE2EPage } from '@stencil/core/testing';

describe('Exercise 3', () => {
  it('fires a custom event when toggled', async () => {
    const page = await newE2EPage();
    await page.setContent('<todo-item></todo-item>');

    const toggleSpy = await page.spyOnEvent('todoItemToggled');

    const item = await page.find('todo-item >>> label');
    await item .click();

    expect(toggleSpy).toHaveReceivedEventTimes(1);
  });
});
