import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'display-price',
  styleUrl: 'display-price.css',
  shadow: true,
})
export class DisplayPrice {

  private getDisplayAmount(amount: number, taxRate: number = null): string {
    const price = taxRate ? amount * (taxRate / 100) + amount : amount
    const formatter = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'});
    return formatter.format(price)
  }

  render() {
    const { subtotal, tax } = this;
    return (
      <Host>
        <span>Your subtotal is: {this.getDisplayAmount(subtotal)}</span>
        <br/>
        <span>which brings your total to {this.getDisplayAmount(subtotal, tax)}</span>
      </Host>
    );
  }

}
