import { Component, Host, Listen, Prop, State, h } from '@stencil/core';

@Component({
  tag: 'todo-notification',
  styleUrl: 'todo-notification.css',
  shadow: true,
})
export class TodoNotification {

  @Prop() duration: number = 3;
  static MILLISECONDS = 1000

  @State() toastMessages: string[] = [];

  @Listen('todoItemToggled')
  handleToggle(event: CustomEvent) {
    console.log(event)
  }

  render() {
    return (
      <Host>
        <div class="wrapper">
          {this.toastMessages.map( message =>
            <div class="toast">{message}</div>
          )}
        </div>
        <slot></slot>
      </Host>
    );
  }
}
