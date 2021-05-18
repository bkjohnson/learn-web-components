import { Component, Host, State, h } from '@stencil/core';

@Component({
  tag: 'app-shell',
  styleUrl: 'app-shell.css',
  shadow: true,
})
export class AppShell {

  @State() loading: boolean = true;

  items: string[];

  async connectedCallback() {
    // Simulate latency from an API call
    await new Promise(r => setTimeout(r, 2000));

    this.items = [
      'Clean gutters',
      'Vacuum floors',
      'Mow the lawn'
    ]

    this.loading = false
  }

  render() {
    return (
      <Host>
        <slot name="top"></slot>
        {this.loading ? <div>Loading...</div> : (
          <todo-notification>
            {this.items.map(item =>
              <todo-item name={item}></todo-item>
            )}
          </todo-notification>
        )}
        <slot name="bottom"></slot>
      </Host>
    );
  }

}
