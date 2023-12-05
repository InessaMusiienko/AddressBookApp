import { Component, OnInit } from '@angular/core';
import { Address } from '../../../models/address.model';
import { MatDialog } from '@angular/material/dialog';
import { PopUpComponent } from './pop-up/pop-up.component';
import { AppComponent } from '../../../app.component';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-addresses-list',
  templateUrl: './addresses-list.component.html',
  styleUrl: './addresses-list.component.css',
})
export class AddressesListComponent implements OnInit {

  //addresses: Address[] = [
  //  {
  //    gender: 'female',

  //    nameTitle: 'Miss',
  //    nameFirst: 'Jennie',
  //    nameLast: 'Nichols',

  //    streetNumber: 8929,
  //    streetName: 'Valwood Pkwy',

  //    city: 'Billings',
  //    state: 'Michigan',
  //    country: 'United States',
  //    postcode: '63104',

  //    email: 'jennie.nichols@example.com',

  //    phone: '(272) 790-0888',
  //    cell: '(489) 330-2385',

  //    picture: 'https://randomuser.me/api/portraits/men/32.jpg',

  //    nat: 'US'
  //  },
  //  {
  //    gender: 'female',

  //    nameTitle: 'Miss',
  //    nameFirst: 'Jennie',
  //    nameLast: 'Nichols',

  //    streetNumber: 8929,
  //    streetName: 'Valwood Pkwy',

  //    city: 'Billings',
  //    state: 'Michigan',
  //    country: 'United States',
  //    postcode: '63104',

  //    email: 'jennie.nichols@example.com',

  //    phone: '(272) 790-0888',
  //    cell: '(489) 330-2385',

  //    picture: 'https://randomuser.me/api/portraits/men/75.jpg',

  //    nat: 'US'
  //  }
  //];

  public contacts: any;
  //public contacts: Address[] =[];
  constructor(private dialogRef: MatDialog, private app: AppComponent, private http: HttpClient) {
    this.contacts = [];
  }
  
  openDialog(name: string) {
    this.dialogRef.open(PopUpComponent, {
      width: '380px',
      data: { name: 'Sam' },
    });
  }

  ngOnInit(): void {
    this.getContacts();
  }
  getContacts() {
    this.http.get('http://localhost:5250/AddressBook/GetAllContacts').subscribe(
      (result: any) => {
        this.contacts = result;
      },
      (error) => {
        console.error(error);
      }
    );
  }

}
