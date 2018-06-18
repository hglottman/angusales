import { Component, OnInit, Input, EventEmitter, Output, OnChanges } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
import {MatInputModule} from '@angular/material';
import { MatSelectModule } from '@angular/material/select';



@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss']
})
export class AddCustomerComponent implements OnInit {

  // @Input()
   customer: Customer = new Customer();


  constructor(private customerService: CustomerService) { }

  ngOnInit() {
  }

  submitCustomer() {
    this.customerService.addCustomer(this.customer);
  }


}

