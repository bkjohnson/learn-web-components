import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'todo-completed',
  styleUrl: 'todo-completed.css',
  shadow: true,
})
export class TodoCompleted {

  @Prop() completed: number;

  @Prop() total: number;

  render() {
    const { completed, total } = this;
    return (
      <Host>
        <span>You have completed {completed} out of {total} items.</span>
      </Host>
    );
  }

}
