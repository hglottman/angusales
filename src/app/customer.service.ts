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

  filterCustomers(filterString) {
    this.http.get<Customer[]>('/customerApi?name=' + filterString).subscribe((data) => {
      this.allCustomers = data;
      this.allCustomersSubject.next(data);
   });
  }



}

  // getMoviesByFilter(filter): Observable<any[]> {
  //   return this.http.get<any[]>('https://anguflix-api.herokuapp.com/api/movies?title=' + filter.title);
  // }

  //   removeMovie(movie) {
  //     console.log(movie.id);
  //   this.http.delete<any[]>('https://anguflix-api.herokuapp.com/api/movies?id=' + movie.id);
  //   this.getMovies();

  //   const id: number = movie.id;

    // const existingMovieIndex = (myId) => {
    //   for (let i = 0; i < this.selectedMovies.length; i++) {
    //     if (this.selectedMovies[i].id === myId) {
    //       return i;
    //     }
    //   }
    // };

    // this.selectedMovies.splice(existingMovieIndex(id), 1);
    // this.user.budget += movie.price;
    // return this.selectedMovies;



  // getSelectedMovies(): Movie[] {
  //   return this.selectedMovies;
  // }


//   addMovie(movie: Movie) {
//     movie.id = this.getSelectedMovies().length + 1;
//     this.selectedMovies.push(movie);
//   }


//   updateBudget(movie: Movie) {
//     this.user.budget -= movie.price;
//   }

// }


