import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params, ParamMap } from '@angular/router';
import { switchMap, map } from 'rxjs/operators';

import { CustomersService } from '../customers.service';

import { Customer } from '../models/customer.interface';

@Component({
  selector: 'app-customer-viewer',
  styleUrls: ['customer-viewer.component.scss'],
  templateUrl: 'customer-viewer.component.html'
})
export class CustomerViewerComponent implements OnInit {

  customer: Customer;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private dataService: CustomersService) {}

  ngOnInit() {

    // const id = +this.route.snapshot.paramMap.get('id');

    this.route.paramMap.subscribe((params: ParamMap) => {
      const id = +params.get('id');
      this.dataService.getById (id)
        .subscribe((data: Customer) => this.customer = data);
    });
  }

  onUpdate(customer: Customer) {

    this.dataService
      .update (customer)
      .subscribe((data: Customer) => {
          this.customer = Object.assign({}, this.customer, customer);
      });
  }

  goBack() {
    this.router.navigate(['/customers']);
  }
}
