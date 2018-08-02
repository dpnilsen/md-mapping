import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-left',
  templateUrl: './nav-left.component.html',
  styleUrls: ['./nav-left.component.css']
})
export class NavLeftComponent implements OnInit {

  navList: Nav[] = [
    { name: 'Dashboard', link: '/' },
    { name: 'Customers', link : '/customers' },
    { name: 'Applications', link : '/applications' }
  ];

  // fillerNav = Array(1).fill(0).map((_, i) => `Config`);

  constructor() { }

  ngOnInit() {
  }

}

interface Nav {
  name: string;
  link: string;
}
