import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Customer } from '../customer';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, Observable, Subscriber } from 'rxjs';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { MatTableModule, MatSortModule, MatTableDataSource } from '@angular/material';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  customers: Customer[];
  displayedColumns = ['customerId', 'firstName', 'lastName', 'companyId', 'email', 'phone', 'actions'];

  private dataSource;


  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.setCustomers();
  }

  setCustomers() {
    this.customerService.getAllCustomers();
    this.customerService.allCustomersObservable.subscribe((customers) => {
      this.customers = customers;
      this.dataSource = new MatTableDataSource(this.customers);
    });
  }

  deleteCustomer(customerId) {
      this.customerService.deleteCustomer(customerId);
  }

  // editCustomer(customerId) {
  //   this.customerService.deleteCustomer(customerId);

  // }

}
