import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Customer } from '../customer.interface';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.scss']
})
export class CustomerDetailComponent implements OnChanges {

  @Input()
  detail: Customer;

  @Output()
  edit: EventEmitter<Customer> = new EventEmitter<Customer>();

  @Output()
  remove: EventEmitter<Customer> = new EventEmitter<Customer>();

  @Output()
  view: EventEmitter<Customer> = new EventEmitter<Customer>();

  editing = false;

  private customer: Customer;

  constructor(
    private route: ActivatedRoute,
    private location: Location
  ) { }

  // will stop immidiate reflecting updates of the customer back to the parent
  // Pushing Done button will emit the change
  ngOnChanges(changes) {
    if (changes.detail) {
      this.detail = Object.assign({}, changes.detail.currentValue);
    }
  }

  onNameChanged(value: string) {

    this.detail.name = value;

  }
  // get(): void {
  //   const id = +this.route.snapshot.paramMap.get('id');
  //   this.dataService.getById(id)
  //     .subscribe((data: Customer) => this.customer = data);
  // }

  goBack(): void {
    this.location.back();
  }

  // save(): void {
  //   this.dataService.update(this.detail)
  //     .subscribe(() => this.goBack());
  // }

  goTo() {
    this.view.emit(this.detail);
  }

  toggleEdit() {
    if (this.editing) {
      this.edit.emit(this.detail);
    }

    this.editing = !this.editing;
  }

  onRemove() {
    this.remove.emit(this.detail);
  }
}
