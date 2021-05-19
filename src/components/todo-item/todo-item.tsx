import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'todo-item',
  styleUrl: 'todo-item.css',
  shadow: true,
})
export class TodoItem {
  @Prop() name: string;

  checked: boolean = false;

  private toggleChecked(): void {
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
