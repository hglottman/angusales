import { Component, OnInit, Input, EventEmitter, Output, OnChanges } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
import {MatInputModule} from '@angular/material';
import { MatSelectModule } from '@angular/material/select';


@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.scss']
})
export class EditCustomerComponent implements OnInit {

  @Input() customer: Customer;

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
  }

  updateCustomer(updatedCustomer) {
    this.customerService.getCustomer(this.customer.customerId);
    this.customerService.editCustomer(updatedCustomer);
  }


}
