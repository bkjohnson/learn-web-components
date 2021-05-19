import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'todo-completed',
  styleUrl: 'todo-completed.css',
  shadow: true,
})
export class TodoCompleted {

  render() {
    const { completed, total } = {completed: 0, total: 0 };
    return (
      <Host>
        <span>You have completed {completed} out of {total} items.</span>
      </Host>
    );
  }

}
