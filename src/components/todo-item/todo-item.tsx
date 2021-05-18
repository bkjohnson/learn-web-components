import { Component, Event, EventEmitter, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'todo-item',
  styleUrl: 'todo-item.css',
  shadow: true,
})
export class TodoItem {
  @Prop() name: string;

  checked: boolean = false;

  @Event()
  todoItemToggled: EventEmitter;

  private toggleChecked(): void {
    this.checked = !this.checked;
    this.todoItemToggled.emit({ name: this.name, checked: this.checked });
  }

  render() {
    return (
      <Host>
        <li>
          <label>
            <input type="checkbox" onClick={this.toggleChecked.bind(this)}></input>
            {this.name}
          </label>
        </li>
      </Host>
    )
  }
}
