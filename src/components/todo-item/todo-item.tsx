import { Component, Event, EventEmitter, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'todo-item',
  styleUrl: 'todo-item.css',
  shadow: true,
})
export class TodoItem {
  @Prop() name: string;

  @Event({
    composed: true,
    bubbles: true,
  })
  todoItemToggled: EventEmitter;


  private toggleChecked(e: MouseEvent): void {
    console.log(e)
    this.todoItemToggled.emit();
  }

  render() {
    return (
      <Host>
        <li>
          <label>
            <input type="checkbox" name="peas" onClick={this.toggleChecked.bind(this)}></input>
            {this.name}
          </label>
        </li>
      </Host>
    )
  }
}
