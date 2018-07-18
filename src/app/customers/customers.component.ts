import { Component, OnInit, Output } from '@angular/core';


import { Customer } from './customer.interface';
import { CustomersService } from './customers.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customers',
  styleUrls: ['customers.component.scss'],
  template: 'customers.component.html'
})
export class CustomersComponent implements OnInit {


  customers: Customer[] = [];

  constructor(
    private router: Router,
    private dataService: CustomersService ) {}

  ngOnInit() {

     this.dataService
      .getAll()
      .subscribe((data: Customer[]) => this.customers = data);
  }

  handleRemove(event: Customer) {

    this.dataService
      .delete(event)
      .subscribe((data: Customer) => {

        this.customers = this.customers.filter((customer: Customer) => {
          return customer.id !== event.id;
        });

      });
  }

  handleEdit(event: Customer){

    this.dataService
      .update(event)
      .subscribe((data: Customer) => {
        this.customers = this.customers.map((customer: Customer) => {
          if (customer.id === event.id) {
            customer = Object.assign({}, customer, event); // immutable operation: creates a new passenger, merging changes
          }
          return customer;
        });
      });


    console.log(this.customers);

  }

  handleView(event: Customer){
    this.router.navigate(['/customers', event.id]);
  }

}
