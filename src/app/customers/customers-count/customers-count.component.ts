import { Component, Input } from '@angular/core';
import { Customer } from '../models/customer.interface';


@Component({
  selector: 'app-customers-count',
  template: `
    <div>
      <h3>Customers</h3>
      <div>
        Total checked in: {{ checkedInCount() }} / {{ items?.length }}
      </div>
    </div>
  `
})
export class CustomersCountComponent {

  @Input()
  items: Customer[];

  constructor() {}

  checkedInCount(): number {

    if (!this.items) { return; }

    return this.items.filter((customer: Customer) =>  customer.checkedIn).length;
  }
}
