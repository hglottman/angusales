import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MatTableModule, MatSortModule, MatTableDataSource } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { enableProdMode } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { TableComponent } from './table/table.component';
import { FilterComponent } from './filter/filter.component';
import { CustomerService } from './customer.service';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';

enableProdMode();

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    BodyComponent,
    HeaderComponent,
    FilterComponent,
    AddCustomerComponent,
    EditCustomerComponent],
  imports: [
    MatIconModule,
    MatFormFieldModule,
    MatTableModule,
    MatSortModule,
    // MatTableDataSource,
    CommonModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    FormsModule,
    MatSortModule,
    HttpClientModule,
    BrowserModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule
  ],
  providers: [CustomerService],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})

export class AppModule { }

export class AppRoutingModule { }

