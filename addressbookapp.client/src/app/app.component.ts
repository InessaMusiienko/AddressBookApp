import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddressesListComponent } from './components/addresses/addresses-list/addresses-list.component';
import { Address } from './models/address.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  //public contacts: Address[] = [];
  //constructor(private http: HttpClient) {}

  //ngOnInit() {
  //  this.getContacts();
  //}

  //getContacts() {
  //  this.http.get<Address[]>('/addressbook/getallcontacts').subscribe(
  //    (result) => {
  //      this.contacts = result;
  //    },
  //    (error) => {
  //      console.error(error);
  //    }
  //  );
  //}

  ngOnInit() { }

  title = 'addressbookapp.client';
}
