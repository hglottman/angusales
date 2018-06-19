import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, Observable, Subscriber } from 'rxjs';
import { Customer } from './customer';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class CustomerService {


  allCustomers: Array<Customer>;
  allCustomersSubject: Subject<Customer[]> = new Subject<Customer[]>();
  allCustomersObservable: Observable<Customer[]>;

  constructor(private http: HttpClient) {
    this.allCustomersObservable = this.allCustomersSubject.asObservable();
  }

  getAllCustomers(): any {
    const observable = this.http.get<Customer[]>('/customerApi');
      observable.subscribe((data) => {
        this.allCustomers = data;
        this.allCustomersSubject.next(data);
      });
  }

  getCustomer(customerId) {
    return this.http.get<any>('/customerApi/' + customerId);
  }

  addCustomer(newCustomer: Customer): void {
    this.http.post<Customer>('/customerApi', { customer: newCustomer }).subscribe(() => {
      this.getAllCustomers();
    });
  }

  deleteCustomer(customerId) {
      this.http.delete<Customer>('/customerApi/' + customerId).subscribe(() => {
        this.getAllCustomers();
      });
  }

  editCustomer(updatedCustomer) {
    this.http.put<Customer>('/customerApi/' + updatedCustomer.customerId, { customer: updatedCustomer }).subscribe(() => {
      this.getAllCustomers();
    });
  }

  filterCustomers(filterString) {
    this.http.get<Customer[]>('/customerApi?name=' + filterString).subscribe((data) => {
      this.allCustomers = data;
      this.allCustomersSubject.next(data);
   });
  }



}





