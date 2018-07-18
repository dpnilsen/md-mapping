import { Component, Input, EventEmitter, Output } from '@angular/core';

import { Customer } from '../customer.interface';

@Component({
  selector: 'app-customer-form',
  styleUrls: ['customer-form.component.scss'],
  templateUrl: 'customer-form.component.html'
})
export class CustomerFormComponent {
  @Input()
  detail: Customer;

  @Output()
  update: EventEmitter<Customer> = new EventEmitter<Customer>();


  toggleCheckIn(checkedIn: boolean) {
    if (checkedIn) {
      this.detail.checkInDate = Date.now(); // in ms
    }
  }

  handleSubmit(customer: Customer, isValid: boolean) {
    if (isValid) {
        this.update.emit(customer);
    }
  }
}
