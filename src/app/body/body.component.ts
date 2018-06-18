import { Component, OnInit, Injectable, OnDestroy } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Customer } from '../customer';
import { ActivatedRoute, Router } from '@angular/router';
import {MatFormFieldModule} from '@angular/material/form-field';


@Injectable()

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {

  filterString: string;

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
  }

  onFilterChanged(filterString) {
    console.log(filterString);
    if (filterString !== undefined) {
      this.customerService.filterCustomers(filterString);
    // this.router.navigate(['.'], { queryParams: { name: filterString }}).then(() =>{
    // }
  }
  }

}
