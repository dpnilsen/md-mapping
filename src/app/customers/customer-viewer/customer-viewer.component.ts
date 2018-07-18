import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params, ParamMap } from '@angular/router';
import { switchMap, map } from 'rxjs/operators';

import { CustomersService } from '../customers.service';

import { Customer } from '../customer.interface';

@Component({
  selector: 'app-customer-viewer',
  styleUrls: ['customer-viewer.component.scss'],
  template: `
    <div>
      <button (click)="goBack()">&lsaquo; Go back</button>
      <app-customer-form
        [detail]="customer"
        (update)="onUpdate($event)">

      </app-customer-form>
    </div>
  `
})
export class CustomerViewerComponent implements OnInit {

  customer: Customer;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private dataService: CustomersService) {}

  ngOnInit() {

    // const id = +this.route.snapshot.paramMap.get('id');

    // this.route.paramMap.subscribe((params: ParamMap) => {
    //   const id = +params.get('id');
    //   this.dataService.getById (id)
    //     .subscribe((data: Customer) => this.customer = data);
    // });

    this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.dataService.getById (+params.get('id'))
      ));

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
