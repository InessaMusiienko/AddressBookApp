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


  public contacts: any;
  constructor(private dialogRef: MatDialog, private app: AppComponent, private http: HttpClient) {
    this.contacts = [];
  }
  
  openDialog(id: string) {
    let z = this.contacts as Address[];

    let contact = z.find((x) => x.id === id);

    this.dialogRef.open(PopUpComponent, {
      width: '380px',
      
      data: { contact },
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
