import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

// import 'rxjs/add/operator/filter';

import { WindowRef } from '../../core/windowref.service';

interface Logo {
  name: string;
  image: string;
}

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  logo: Logo = {
    name : 'EVRY',
    image :  '../../../assets/images/footer-logo.png'
  };

  constructor(
    private router: Router,
    private windowRef: WindowRef
  ) {
    // this.router.events
    //  .filter(event => event instanceof NavigationEnd)
    //  .subscribe((event: NavigationEnd) => {
    //    console.log("Footer navigation end triggered");
    //    window.scroll(0, 0);
    //  });


  }

  ngOnInit() {
  }

  navigateHome() {
  }

  navigateTop() {

    this.windowRef.nativeWindow.scroll(0, 0);
  }
}
