import { Component, OnInit, Injectable } from '@angular/core';
import { Customer } from '../customer';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  customer: Customer;
  display = false;

  constructor() {
    // this.customer = customerService.myUser;
   }

  ngOnInit() {
  }
  addCustomer() {
    if (this.display === false) {
      this.display = true;
    } else { this.display = false;
  }

}
}
